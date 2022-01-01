require("dotenv").config();


// �o�O�d��  jsonschema
var Ch = require("jsonschema").Validator;
var Schema = new Ch();
//var ins = 4;
var SchemaNumber = { "type": "number" };
//var SchemaString = { "type": "string" };
//var SchemaString = { "type": "string" };
//const { request } = require("http");

// 
//���J�M��
exports.SearchBook = SearchBook;


const webdriver = require("selenium-webdriver");
const { By, until } = require("selenium-webdriver"); //
const chrome = require("selenium-webdriver/chrome"); //chrome ���J�]�w

//
//google �ϥΰѼ� ���
const options = new chrome.Options();
options.addArguments('--log-level=3'); // �o��option�i�H���A������ݪ�console.log���T�T
// �]��notifications�|�z�Z�쪦�ΡA�ҥH�n���⥦����
options.setUserPreferences({ 'profile.default_content_setting_values.notifications': 1 });
options.addArguments('blink-settings=imagesEnabled=false');

options.addArguments('--headless'); //���}google
options.addArguments('--disable-dev-shm-usages');
options.addArguments('--disable=pgu');

// �����J of 
const pathRoute = process.env.PathRoute;  //�L�k�I�J�i�h
const path = require("path");
const fs = require("fs");
// var use

var Result_Text;

async function SearchBook() {
    var PathRoute = pathRoute.split(',');
    //console.log();
    //let e = vv.validate(ins, schema);
    //console.log(e);

    let driver;
    try {
        driver = await new webdriver.Builder().forBrowser("chrome").withCapabilities(options).build(); // �إ߳o��Browser������
    } catch (e) {
        console.error('�L�k�إ��s����!');
        console.error(e);
        return;
    }
    //const web = 'https://www.twitch.tv/uzra'; // FB�n�J����
    //const web = 'https://news.wearn.com/news.asp?cat=%AC%FC%AA%D1';
    //console.log('1');
    for (var j = 0; j < PathRoute.length; j++) {
        const web = 'https://hk.finance.yahoo.com/quote/' + PathRoute[j] + '/';
        //console.log(web);
        await driver.get(web); // �b�o�̭n��await�T�O���}��������~���~��ʧ@
        await driver.sleep(1000);

        
        try {
            var Literal_Text = await driver.wait(until.elementsLocated(By.xpath(`//*[@id="quote-header-info"]/div[2]/div[1]/div[1]/h1`)));

            for (const LT of Literal_Text) {
                Result_Text = "Stock market Name : " + await LT.getText()+"\r\n";
            }
            //console.log(Result_Text);
            // ����
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
                        Result_Text += "-------------------------End Next---------------------------------\r\n";
                    }
                }
            }
            console.log(Result_Text);
        
            // //*[@id="quoteNewsStream-0-Stream"]/ul/li[1]/div/div
        
        
            await driver.sleep(4000);
        
            
        }
        catch (e) {
            console.error("ERROR:" + e);
            driver.quit();
        }
        finally {
        
        }
    }

    driver.quit();
}




