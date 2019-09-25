var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing'); // add 'test.' wrapper
var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();
var assert = require('assert');
test.describe('User Authentication', function () {
    test.it('User can sign in', function () {
        driver.get('http://travel.agileway.net');
        driver.findElement(webdriver.By.name('username')).sendKeys('agileway');
        driver.findElement(webdriver.By.name('password')).sendKeys('testwise');
        driver.findElement(webdriver.By.name('commit')).click();
        driver.getTitle().then(function (the_title) {
            assert.equal("Agile Travel", the_title);
        });
    });
});