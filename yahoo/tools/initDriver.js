//
exports.initDriver = initDriver;
//
//const webdriver = require('selenium-webdriver'); // �[�J���������M��
const chrome = require('selenium-webdriver/chrome');
//const options = new chrome.Options();
//options.addArguments('--log-level=3');//�o��option�i�H���A������ݪ�console.log���T�T
//options.setUserPreferences({ 'profile.default_content_setting_values.notifications': 1 });//�]��FB�|��notifications�z�Z�쪦�ΡA�ҥH�n���⥦����
//
const path = require('path');//�Ω�B�z�����|���p�u��
const fs = require('fs');//Ū���ɮץ�
//


function initDriver() {
    try {
        chrome.getDefaultService(); // �T�{�O�_���w�]        
    } catch {
        console.warn('�䤣��w�]driver!');
        const file_path = '../../chromedriver.exe'; // '../chromedriver.exe'�O�o�վ㦨�ۤv�����|
        console.log(path.join(__dirname, file_path)); // �нT�{�L�X�Ӥ�x������m�O�_�P�A���|�ۦP
        if (fs.existsSync(path.join(__dirname, file_path))) { // �T�{���|�Uchromedriver.exe�O�_�s�b            
            const service = new chrome.ServiceBuilder(path.join(__dirname, file_path)).build(); // �]�wdriver���|
            chrome.setDefaultService(service);
            console.log('�]�wdriver���|');
        } else {
            console.error('�L�k�]�wdriver���|');
            return false;
        }
    }
    return true;
}


//async function initDriver()
//{
//    try {
//        chrome.getDefaultService();//�T�{�O�_���w�]
//    } catch {
//        console.warn('cc driver!');
//        //�Ъ`�N�]�����tools���U����A�ҥHchromedriver.exe���۹��m�ݭn�ܧ�
//        const file_path = '../../chromedriver.exe';
//        //�нT�{�L�X�Ӥ�x������m�O�_�P�A���|�ۦP
//        //console.log("file_path:" + file_path);
//        //console.log("__dirname:" + __dirname+ file_path);
//        //console.log(path.join(__dirname, file_path));
//        //�T�{���|�Uchromedriver.exe�O�_�s�b
//        if (fs.existsSync(path.join(__dirname, file_path))) {
//            const service = new chrome.ServiceBuilder(path.join(__dirname, file_path)).build();//�]�wdriver���|
//            chrome.setDefaultService(service);
//            console.log('�]�wdriver���|');
//        } else {
//            console.error('�L�k�]�wdriver���|');
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
//    //    console.error('�L�k�إ��s����!');
//    //    console.error(e);
//    //    return;
//    //}
//}
//
//function checkDriver() {
//   
//}