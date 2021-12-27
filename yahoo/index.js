const fb_username = process.env.FB_USERNAME;
const fb_userpass = process.env.FB_PASSWORD;

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

function checkDriver() {
    try {
        chrome.getDefaultService(); // 確認是否有預設        
    } catch {
        console.warn('找不到預設driver!');
        const file_path = '../chromedriver.exe'; // '../chromedriver.exe'記得調整成自己的路徑
        console.log(path.join(__dirname, file_path)); // 請確認印出來日誌中的位置是否與你路徑相同
        if (fs.existsSync(path.join(__dirname, file_path))) { // 確認路徑下chromedriver.exe是否存在            
            const service = new chrome.ServiceBuilder(path.join(__dirname, file_path)).build(); // 設定driver路徑
            chrome.setDefaultService(service);
            console.log('設定driver路徑');
        } else {
            console.error('無法設定driver路徑');
            return false;
        }
    }
    return true;
}

async function SearchBook() {
    let driver;
    if (!checkDriver()) {// 檢查driver是否設定，如果無法設定就結束程式
        return;
    }
    try {
        driver = await new webdriver.Builder().forBrowser("chrome").withCapabilities(options).build(); // 建立這個Browser的類型
    } catch (e) {
        console.error('無法建立瀏覽器!');
        console.error(e);
        return;
    }
    const web = 'https://www.books.com.tw/?loc=tw_website_001'; // FB登入頁面
    await driver.get(web); // 在這裡要用await確保打開完網頁後才能繼續動作
    await driver.sleep(1000);
    //同上
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
    //成功關閉 廣告 close
    closeBanner.click();
    await driver.sleep(200);

    const inputKind = await driver.wait(until.elementLocated(By.xpath(`//*[@name="key"]`)));
    //console.log(inputKind);
    const stringvalue = "javascript";
    inputKind.sendKeys(stringvalue);
    console.log(inputKind);
    // 無法輸入的原因 sleep 需要時間輸入 done in 8.15s
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