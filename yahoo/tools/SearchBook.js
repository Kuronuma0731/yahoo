//const { request } = require("http");

//���J�M��
//exports.SearchBook = SearchBook;
//require("dotenv").config();
////const { initDriver } = require("./tools/initDriver.js"); //���J���
////const driver = await initDriver();
//const { initDriver } = require("./initDriver");
//const webdriver = require("selenium-webdriver");
//const { By, until } = require("selenium-webdriver"); //
//const chrome = require("selenium-webdriver/chrome"); //chrome ���J�]�w
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
//         //driver = await new webdriver.Builder().forBrowser("chrome").withCapabilities(options).build(); // �إ߳o��Browser������
//        //await driver.manage().window();
//        //chrome.setDefaultService('https://www.books.com.tw/?loc=tw_logo_001');
//        //driver.get(pathRoute);
//        //console.log(pathRoute);
//        //return driver;
//    } catch (e)
//    {
//        //console.error(e);
//        console.error('�L�k�إ��s����!');
//        console.error(e);
//        return;
//    }
//    await driver.get(pathRoute); // �}�Һ���
//
//}