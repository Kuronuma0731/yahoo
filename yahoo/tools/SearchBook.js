require("dotenv").config();


// 這是範例  jsonschema
var Ch = require("jsonschema").Validator;
var vv = new Ch();
var ins = 4;
var schema = { "type": "number" };
//const { request } = require("http");

// 
//載入專案
exports.SearchBook = SearchBook;


const webdriver = require("selenium-webdriver");
const { By, until } = require("selenium-webdriver"); //
const chrome = require("selenium-webdriver/chrome"); //chrome 載入設定

//
//google 使用參數 更改
const options = new chrome.Options();
options.addArguments('--log-level=3'); // 這個option可以讓你跟網頁端的console.log說掰掰
// 因為notifications會干擾到爬蟲，所以要先把它關閉
options.setUserPreferences({ 'profile.default_content_setting_values.notifications': 1 });
options.setUserPreferences({ '': 0 });
//
// 文件載入 of 
const pathRoute = process.env.PathRoute;  //無法截入進去
const path = require("path");
const fs = require("fs");
// var use

var Result_Text;

async function SearchBook() {

    console.log(pathRoute);
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
    //const web = 'https://news.wearn.com/news.asp?cat=%AC%FC%AA%D1';
    //console.log('1');
    const web = 'https://hk.finance.yahoo.com/quote/PINS/';
    await driver.get(web); // 在這裡要用await確保打開完網頁後才能繼續動作
    await driver.sleep(1000);
    
    try {
        //*[@id="quote-summary"]/div[2]
        Result_Text = "Pinsterest ,Inc.(Pins) U.S. stocks \r\n";
        // 市價
        for (var i = 1; i < 3; i++) {
            const market_price = await driver.wait(until.elementsLocated(By.xpath(`//*[@id="quote-summary"]/div[` + i + `]/table/tbody/tr`)));
            for (const MP of market_price) {
                var market_priceText = await MP.getText();
                //console.log(market_priceText);
                Result_Text = Result_Text + market_priceText + "\r\n";
            }
        }
        Result_Text += "The following recent information \r\n";
        for (var i = 1; i < 10; i++) {
            if (i != 2 && i != 7) {
                const market_Text = await driver.wait(until.elementsLocated(By.xpath(`//*[@id="quoteNewsStream-0-Stream"]/ul/li[` + i + `]/div/div`)));
                for (const MP of market_Text) {
                    var market_priceText = await MP.getText();
                    //console.log(market_priceText);
                    Result_Text = Result_Text + market_priceText + "\r\n";
                    Result_Text += "-------------------------End Next---------------------------------";
                }
            }
        }
        console.log(Result_Text);
    
        // //*[@id="quoteNewsStream-0-Stream"]/ul/li[1]/div/div
    
    
        await driver.sleep(300);
    
    
    
    
    
        driver.quit();
    } catch (e) {
        console.error("ERROR:" + e);
        driver.quit();
    }
    finally
    {
       
    }




}