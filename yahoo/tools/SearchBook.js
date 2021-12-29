
var Ch = require("jsonschema").Validator;
var vv = new Ch();
var ins = 4;
var schema = { "type": "number" };
//const { request } = require("http");

//載入專案
exports.SearchBook = SearchBook;
require("dotenv").config();
const webdriver = require("selenium-webdriver");
const { By, until } = require("selenium-webdriver"); //
const chrome = require("selenium-webdriver/chrome"); //chrome 載入設定


const options = new chrome.Options();
options.addArguments('--log-level=3'); // 這個option可以讓你跟網頁端的console.log說掰掰
// 因為notifications會干擾到爬蟲，所以要先把它關閉
options.setUserPreferences({ 'profile.default_content_setting_values.notifications': 1 });
const pathRoute = process.env.PathRoute;
const path = require("path");
const fs = require("fs");

async function SearchBook() {

    //let e = vv.validate(ins, schema);
    //console.log(e);

    let driver;
    try {
        driver = await new webdriver.Builder().forBrowser("chrome").withCapabilities(options).build(); // 建立這個Browser的類型
    } catch (e) {
        console.error('無法建立瀏覽器!');
        console.error(e);
        return;
    }
    //const web = 'https://www.twitch.tv/uzra'; // FB登入頁面
    const web = 'https://news.wearn.com/news.asp?cat=%AC%FC%AA%D1';
    await driver.get(web); // 在這裡要用await確保打開完網頁後才能繼續動作
    await driver.sleep(1000);

    try {

        for (var i = 1; i < 30; i++) {
            //判定是否每股
            const Judging_U_S_Stock = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[4]/div/div[1]/div[1]/div/ul/li[` + i + `]/div/span[2]/a`))).getText(); //判斷是否美股
            //const s = vv.validate(Judging_U_S_Stock, { "type":"string"});
            //console.log(s);
            //console.log(Judging_U_S_Stock.length);
            if (Judging_U_S_Stock.length==2) {
                //console.log('1');
                //console.log(Judging_U_S_Stock);
                const TextTime = await driver.wait(until.elementsLocated(By.xpath(`/html/body/div[4]/div/div[1]/div[1]/div/ul/li[` + i + `]/div/span[1]`))); // Time
                const PathText = `/html/body/div[4]/div/div[1]/div[1]/div/ul/li[` + i + `]/a`; //標題
                const SearchText = await driver.wait(until.elementsLocated(By.xpath(PathText)));
                //Array ss = new Array(30); 
                let Txt;
                for (const Text of TextTime) {
                    
                    // 印出時間
                    Txt = await Text.getText();
                    //Txt.substring();
                    //console.log(Txt);
                }
                let ss;
                for (const Search of SearchText)
                {
                    ss = await Search.getText();
                    //console.log(jud);
                }
                console.log("Release Time:" + Txt + " "+ ss);

                //
                ////driver.sleep(2000);
                ////const SearchText = await driver.wait(until.elementsLocated(By.xpath(`//*[contains(@class,"hHwUye")]`)));  Uzra
                //for (const tw of SearchText) {
                //    let ss = await tw.getText();
                //
                //    console.log(ss);
                //}
            }
        }



        driver.quit();
    } catch (e) {
        console.error("ERROR:" + e);
        driver.quit();
    }
    //finally
    //{
    //   
    //}




}