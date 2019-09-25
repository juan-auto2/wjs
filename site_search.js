var webdriver = require('selenium-webdriver');
By = webdriver.By,
until = webdriver.until;


var driver = new webdriver.Builder().forBrowser('firefox').build();

try {

     //Me gustaria que aprendieras git un poquito
     //Tambien a programar jaja

    driver.get('http://www.webdriverjs.com/');
    driver.manage().window().maximize();
    driver.findElement(By.css('.search-field.form-control')).sendKeys("WebdriverJs");
    driver.findElement(By.css('button.search-submit i')).click();
    driver.wait(until.elementTextIs(driver.findElement(By.css('.vl-main-header>h1')), "Search Results for: WebdriverJs"), 10000);

} catch (error) {
    driver.quit();
}
