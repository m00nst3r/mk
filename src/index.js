import puppeteer from "puppeteer";
import fs from "fs";

const openConfigFile = async () => {
    const data = await fs.readFileSync("./stores.json", "utf-8");
    const json = JSON.parse(data);
    const list = json.list.map(item => item.url);
    return list;
}

const pull = async () => {
    const data = await openConfigFile();
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(data[0], {
        waitUntil: "networkidle0"
    });
    await page.screenshot({path: "page.png"})

    await page.close()
    await browser.close();
}

pull().then(resp => {
    console.log("done");
});