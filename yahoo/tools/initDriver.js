//
//exports.initDriver = initDriver;
//
//const webdriver = require('selenium-webdriver'); // 加入虛擬網頁套件
//const chrome = require('selenium-webdriver/chrome');
//const options = new chrome.Options();
//options.addArguments('--log-level=3');//這個option可以讓你跟網頁端的console.log說掰掰
//options.setUserPreferences({ 'profile.default_content_setting_values.notifications': 1 });//因為FB會有notifications干擾到爬蟲，所以要先把它關閉
//
//const path = require('path');//用於處理文件路徑的小工具
//const fs = require('fs');//讀取檔案用
//
//
//
//async function initDriver()
//{
//    try {
//        chrome.getDefaultService();//確認是否有預設
//    } catch {
//        console.warn('cc driver!');
//        //請注意因為改到tools底下執行，所以chromedriver.exe的相對位置需要變更
//        const file_path = '../../chromedriver.exe';
//        //請確認印出來日誌中的位置是否與你路徑相同
//        //console.log("file_path:" + file_path);
//        //console.log("__dirname:" + __dirname+ file_path);
//        //console.log(path.join(__dirname, file_path));
//        //確認路徑下chromedriver.exe是否存在
//        if (fs.existsSync(path.join(__dirname, file_path))) {
//            const service = new chrome.ServiceBuilder(path.join(__dirname, file_path)).build();//設定driver路徑
//            chrome.setDefaultService(service);
//            console.log('設定driver路徑');
//        } else {
//            console.error('無法設定driver路徑');
//            return false;
//        }
//    }
//    return true;
//    //if (!checkDriver())
//    //{
//    //    return;
//    //}
//    //try {
//    //    let driver = await new webdriver.Builder().forBrowser("chrome").withCapabilities(options,
//    //        { accptSslecerta: true, acceptInsecureCerts: true }).build();
//    //
//    //    return driver;
//    //} catch (e)
//    //{
//    //    console.error('無法建立瀏覽器!');
//    //    console.error(e);
//    //    return;
//    //}
//}
//
//function checkDriver() {
//   
//}