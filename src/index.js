import puppeteer from "puppeteer";
import fs from "fs";

const openConfigFile = async () => {
    const data = await fs.openSync('./index.js');
    console.log(data);
    return {}
}

const pull = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://keygem.store", {
        waitUntil: "networkidle0"
    });
    await page.screenshot({path: "page.png"})

    await page.close()
    await browser.close();
}

pull().then(resp => {
    console.log("done");
});