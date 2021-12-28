
var Ch = require("jsonschema").Validator;
var vv = new Ch();
var ins = 4;
var schema = { "type": "number" };
//const { request } = require("http");

//���J�M��
exports.SearchBook = SearchBook;
require("dotenv").config();
const webdriver = require("selenium-webdriver");
const { By, until } = require("selenium-webdriver"); //
const chrome = require("selenium-webdriver/chrome"); //chrome ���J�]�w


const options = new chrome.Options();
options.addArguments('--log-level=3'); // �o��option�i�H���A������ݪ�console.log���T�T
// �]��notifications�|�z�Z�쪦�ΡA�ҥH�n���⥦����
options.setUserPreferences({ 'profile.default_content_setting_values.notifications': 1 });
const pathRoute = process.env.PathRoute;
const path = require("path");
const fs = require("fs");

async function SearchBook() {

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
    const web = 'https://www.twitch.tv/uzra'; // FB�n�J����
    await driver.get(web); // �b�o�̭n��await�T�O���}��������~���~��ʧ@
    await driver.sleep(1000);

    try {
        //�P�W
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
        ////���\���� �s�i close
        //closeBanner.click();
        //await driver.sleep(200);
        //
        //const inputKind = await driver.wait(until.elementLocated(By.xpath(`//*[@name="key"]`)));
        ////console.log(inputKind);
        //const stringvalue = "javascript";
        //inputKind.sendKeys(stringvalue);
        ////console.log(inputKind);
        //// �L�k��J����] sleep �ݭn�ɶ���J done in 8.15s
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