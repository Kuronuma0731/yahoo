const webdriver = require("selenium-webdriver");
const by = webdriver.By;
const until = webdriver.until;

const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();
//�����s�����
options.setUserPreferences({ 'profile.default_content_setting_values.notification': 1 });
const path = require("path");
const fs = require("fs");
function openyahoo() {
    let driver;
    try {
        driver = await new webdriver.Builder().forBrowser("chrome").withCapabilities(options).build();

    } catch (e) {
        console.error(e);
        console.error("�}�ҥ��ѽдM���]");
        return;
    }

}
//