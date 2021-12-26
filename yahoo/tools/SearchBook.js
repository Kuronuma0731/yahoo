//const { request } = require("http");

//載入專案
//exports.SearchBook = SearchBook;
//require("dotenv").config();
////const { initDriver } = require("./tools/initDriver.js"); //載入資料
////const driver = await initDriver();
//const { initDriver } = require("./initDriver");
//const webdriver = require("selenium-webdriver");
//const { By, until } = require("selenium-webdriver"); //
//const chrome = require("selenium-webdriver/chrome"); //chrome 載入設定
//
//const pathRoute = process.env.PathRoute;
//
//const path = require("path");
//const fs = require("fs");
//
//async function SearchBook() { 
//    //console.log(pathRoute);
//    if (!initDriver)
//    {
//        return;
//    }
//    let driver;
//    try {
//       
//        driver = await new webdriver.Builder().forBrowser("chrome").build();
//
//        //.withCapabilities(options);
//         //driver = await new webdriver.Builder().forBrowser("chrome").withCapabilities(options).build(); // 建立這個Browser的類型
//        //await driver.manage().window();
//        //chrome.setDefaultService('https://www.books.com.tw/?loc=tw_logo_001');
//        //driver.get(pathRoute);
//        //console.log(pathRoute);
//        //return driver;
//    } catch (e)
//    {
//        //console.error(e);
//        console.error('無法建立瀏覽器!');
//        console.error(e);
//        return;
//    }
//    await driver.get(pathRoute); // 開啟網頁
//
//}