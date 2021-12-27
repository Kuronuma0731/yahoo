//const fb_username = process.env.FB_USERNAME;
//const fb_userpass = process.env.FB_PASSWORD;

const { initDriver } = require('./tools/initDriver.js')
const { SearchBook } = require('./tools/SearchBook.js')
const webdriver = require('selenium-webdriver'), // 加入虛擬網頁套件
    By = webdriver.By, // 你想要透過什麼方式來抓取元件，通常使用xpath、css
    until = webdriver.until; // 直到抓到元件才進入下一步(可設定等待時間)

const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();
options.addArguments('--log-level=3'); // 這個option可以讓你跟網頁端的console.log說掰掰
// 因為notifications會干擾到爬蟲，所以要先把它關閉
options.setUserPreferences({ 'profile.default_content_setting_values.notifications': 1 });

const path = require('path'); // 用於處理文件路徑的小工具
const fs = require("fs"); // 讀取檔案用

async function SearchBookTest() {
    
    if (!initDriver) {// 檢查driver是否設定，如果無法設定就結束程式
        return;
    }

    SearchBook();

}
SearchBookTest();