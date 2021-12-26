exports.initDriver = initDrive;//����L�ɮצb�ޤJ�ɥi�H�ϥγo�Ө禡

const webdriver = require('selenium-webdriver'); // �[�J���������M��
const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();
options.addArguments('--log-level=3');//�o��option�i�H���A������ݪ�console.log���T�T
options.setUserPreferences({ 'profile.default_content_setting_values.notifications': 1 });//�]��FB�|��notifications�z�Z�쪦�ΡA�ҥH�n���⥦����

const path = require('path');//�Ω�B�z�����|���p�u��
const fs = require("fs");//Ū���ɮץ�

async function initDrive() {
    if (!checkDriver()) {// �ˬddriver�O�_�]�w�A�p�G�L�k�]�w�N�����{��
        return;
    }
    try {
        let driver = await new webdriver.Builder().
            forBrowser("chrome").withCapabilities(options, {
                acceptSslCerts: true, acceptInsecureCerts: true
            }//�o�O���F�ѨM�������D 
            ).build();

        //�Ҽ{��IG�b���P�ù��e�׮ɪ�Xpath���@�ˡA�ҥH�ڭ̭n�b�o�̳]�w�Τ@�������j�p
        //await driver.manage().window().setRect({ width: 1280, height: 800, x: 0, y: 0 });

        return driver;
    } catch (e) {
        console.error('�L�k�إ��s����!');
        console.error(e);
        return;
    }
}

function checkDriver() {
    try {
        chrome.getDefaultService();//�T�{�O�_���w�]
    } catch {
        console.warn('�䤣��w�]driver!');
        //�Ъ`�N�]�����tools���U����A�ҥHchromedriver.exe���۹��m�ݭn�ܧ�
        const file_path = '../../chromedriver.exe';
        //�нT�{�L�X�Ӥ�x������m�O�_�P�A���|�ۦP
        console.log(path.join(__dirname, file_path));
        //�T�{���|�Uchromedriver.exe�O�_�s�b
        if (fs.existsSync(path.join(__dirname, file_path))) {
            const service = new chrome.ServiceBuilder(path.join(__dirname, file_path)).build();//�]�wdriver���|
            chrome.setDefaultService(service);
            console.log('�]�wdriver���|');
        } else {
            console.error('�L�k�]�wdriver���|');
            return false;
        }
    }
    return true;
}