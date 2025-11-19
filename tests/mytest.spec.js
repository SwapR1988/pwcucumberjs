const {expect, test } = require('@playwright/test')
const {mytest} = require('../pageobjects/mytest.page')

test('end to end test', async ({ page }) => {
     
    const username = "rahulshettyacademy ";
    const password = "learning";
    const myTest = new mytest(page)
    myTest.goTo();
    myTest.validLogin(username,password);


})