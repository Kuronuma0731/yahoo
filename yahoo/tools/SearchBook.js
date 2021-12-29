
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
    //const web = 'https://www.twitch.tv/uzra'; // FB�n�J����
    const web = 'https://news.wearn.com/news.asp?cat=%AC%FC%AA%D1';
    await driver.get(web); // �b�o�̭n��await�T�O���}��������~���~��ʧ@
    await driver.sleep(1000);

    try {

        for (var i = 1; i < 30; i++) {
            //�P�w�O�_�C��
            const Judging_U_S_Stock = await driver.wait(until.elementLocated(By.xpath(`/html/body/div[4]/div/div[1]/div[1]/div/ul/li[` + i + `]/div/span[2]/a`))).getText(); //�P�_�O�_����
            //const s = vv.validate(Judging_U_S_Stock, { "type":"string"});
            //console.log(s);
            //console.log(Judging_U_S_Stock.length);
            if (Judging_U_S_Stock.length==2) {
                //console.log('1');
                //console.log(Judging_U_S_Stock);
                const TextTime = await driver.wait(until.elementsLocated(By.xpath(`/html/body/div[4]/div/div[1]/div[1]/div/ul/li[` + i + `]/div/span[1]`))); // Time
                const PathText = `/html/body/div[4]/div/div[1]/div[1]/div/ul/li[` + i + `]/a`; //���D
                const SearchText = await driver.wait(until.elementsLocated(By.xpath(PathText)));
                //Array ss = new Array(30); 
                let Txt;
                for (const Text of TextTime) {
                    
                    // �L�X�ɶ�
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