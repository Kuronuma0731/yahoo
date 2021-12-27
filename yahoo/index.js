const fb_username = process.env.FB_USERNAME;
const fb_userpass = process.env.FB_PASSWORD;

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

function checkDriver() {
    try {
        chrome.getDefaultService(); // �T�{�O�_���w�]        
    } catch {
        console.warn('�䤣��w�]driver!');
        const file_path = '../chromedriver.exe'; // '../chromedriver.exe'�O�o�վ㦨�ۤv�����|
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

async function SearchBook() {
    let driver;
    if (!checkDriver()) {// �ˬddriver�O�_�]�w�A�p�G�L�k�]�w�N�����{��
        return;
    }
    try {
        driver = await new webdriver.Builder().forBrowser("chrome").withCapabilities(options).build(); // �إ߳o��Browser������
    } catch (e) {
        console.error('�L�k�إ��s����!');
        console.error(e);
        return;
    }
    const web = 'https://www.books.com.tw/?loc=tw_website_001'; // FB�n�J����
    await driver.get(web); // �b�o�̭n��await�T�O���}��������~���~��ʧ@
    await driver.sleep(1000);
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
    


    
    const closeBanner = await driver.wait(until.elementLocated(By.xpath(`//*[@id="close_top_banner"]`)));
    //���\���� �s�i close
    closeBanner.click();
    await driver.sleep(200);

    const inputKind = await driver.wait(until.elementLocated(By.xpath(`//*[@name="key"]`)));
    //console.log(inputKind);
    const stringvalue = "javascript";
    inputKind.sendKeys(stringvalue);
    console.log(inputKind);
    // �L�k��J����] sleep �ݭn�ɶ���J done in 8.15s
    await driver.sleep(3000);

    const SearchButton = await driver.wait(until.elementLocated(By.xpath(`//*[@id="search"]/button`)));
    //const SearchButton = await driver.wait(until.elementsLocated(By.xpath(`//*[@id="search"]/button`)));
    //const SearchButton = driver.wait(By.xpath(`//*[@id="search"]/button`));
    
    //console.log(SearchButton);
    SearchButton.click();
    await driver.sleep(3000);
    

    //await driver.sleep(100);


    driver.quit();

}
SearchBook();