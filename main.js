const { BrowserWindow, app } = require("electron");
const pie = require("puppeteer-in-electron");
const puppeteer = require("puppeteer-core");
require("./app.js");

const main = async () => {
    await pie.initialize(app);
    const browser = await pie.connect(app, puppeteer);

    const window = new BrowserWindow();
    const url = "http://localhost:3123";
    await window.loadURL(url);

    const page = await pie.getPage(browser, window);
    console.log(page.url());
    // window.destroy();
};

main();
