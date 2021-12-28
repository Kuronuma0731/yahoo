
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
    const web = 'https://www.twitch.tv/uzra'; // FB登入頁面
    await driver.get(web); // 在這裡要用await確保打開完網頁後才能繼續動作
    await driver.sleep(1000);

    try {
        //同上
        //const booknotifications = await driver.wait(until.elementsLocated(By.xpath(`//*[@class="hot_key_words clearfix"]`)));
        //const booknotifications = await driver.wait(until.elementsLocated(By.xpath(`//*[@class="hot_key_words clearfix"]`)));
        //const booknotifications = await driver.wait(until.elementsLocated(By.xpath(`//*[contains(@class,"hot_key_words clearfix")]`)));
        //const booknotifications = await driver.wait(until.elementsLocated(By.xpath(`//*[contains(@class,"hot_key_words clearfix")]`)));

        //console.log(booknotifications)
        //for (const ff of booknotifications)
        //{
        //    const fs1 = await ff.getText();
        //    console.log(fs1);
        //}




        //const closeBanner = await driver.wait(until.elementLocated(By.xpath(`//*[@id="close_top_banner"]`)));
        ////成功關閉 廣告 close
        //closeBanner.click();
        //await driver.sleep(200);
        //
        //const inputKind = await driver.wait(until.elementLocated(By.xpath(`//*[@name="key"]`)));
        ////console.log(inputKind);
        //const stringvalue = "javascript";
        //inputKind.sendKeys(stringvalue);
        ////console.log(inputKind);
        //// 無法輸入的原因 sleep 需要時間輸入 done in 8.15s
        //await driver.sleep(3000);
        //
        //const SearchButton = await driver.wait(until.elementLocated(By.xpath(`//*[@id="search"]/button`)));
        ////const SearchButton = await driver.wait(until.elementsLocated(By.xpath(`//*[@id="search"]/button`)));
        ////const SearchButton = driver.wait(By.xpath(`//*[@id="search"]/button`));
        //
        ////console.log(SearchButton);
        //SearchButton.click();

        //await driver.sleep(3000);
        //const SearchText = await driver.wait(until.elementLocated(By.xpath(`//a[contains(@rel,'mid_name')]`))).getText(); // javascript
        // 
        //const SearchText = await driver.wait(until.elementLocated(By.xpath(`//*[@class,"CoreText-sc-cpl358-0 bHivom"]`)), 5000).getText();
        const SearchText = await driver.wait(until.elementsLocated(By.xpath(`//*[contains(@class,"hHwUye")]`)));
        for (const tw of SearchText) {
            let ss = await tw.getText();

              console.log(ss);
        }
        //console.log(vv.validate(SearchText, { "type": "string" }));
        //console.log(SearchText);
        //console.log(SearchText);
        //await driver.sleep(100);
        driver.quit();
    } catch (e)
    {
        console.error("ERROR:" + e);
        driver.quit();
    }
    //finally
    //{
    //   
    //}


    

}