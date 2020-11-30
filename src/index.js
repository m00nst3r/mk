import puppeteer from "puppeteer";
import fs from "fs";

const openConfigFile = async () => {
    const data = fs.readFileSync("./stores.json", "utf-8");
    const json = JSON.parse(data);
    return json.list.map(item => item.url);
}

const fetchPage = async (url, browser) => {
    const pageName = new URL(url).host;
    const page = await browser.newPage();
    await page.setViewport({
        width: 2560,
        height: 1440
    })
    await page.goto(url, {
        waitUntil: "networkidle0"
    });
    await page.screenshot({path: `${pageName}.png`});
    await page.close();
}

const pullAll = async (data, browser) => {
    return Promise.all(data.map(url => fetchPage(url, browser)));
}

const pull = async () => {
    const data = await openConfigFile();
    const browser = await puppeteer.launch();

    await pullAll(data, browser);

    await browser.close();
}

pull().then(resp => {
    console.log("done");
});