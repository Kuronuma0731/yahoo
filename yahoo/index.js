//const fb_username = process.env.FB_USERNAME;
//const fb_userpass = process.env.FB_PASSWORD;

const { initDriver } = require('./tools/initDriver.js')
const { SearchBook } = require('./tools/SearchBook.js')
const webdriver = require('selenium-webdriver'), // �[�J���������M��
    By = webdriver.By, // �A�Q�n�z�L����覡�ӧ������A�q�`�ϥ�xpath�Bcss
    until = webdriver.until; // �����줸��~�i�J�U�@�B(�i�]�w���ݮɶ�)

const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();
options.addArguments('--log-level=3'); // �o��option�i�H���A������ݪ�console.log���T�T
// �]��notifications�|�z�Z�쪦�ΡA�ҥH�n���⥦����
options.setUserPreferences({ 'profile.default_content_setting_values.notifications': 1 });

const path = require('path'); // �Ω�B�z�����|���p�u��
const fs = require("fs"); // Ū���ɮץ�

async function SearchBookTest() {
    
    if (!initDriver) {// �ˬddriver�O�_�]�w�A�p�G�L�k�]�w�N�����{��
        return;
    }

    SearchBook();

}
SearchBookTest();