const {expect, test } = require('@playwright/test')
const {POManager} = require('../pageobjects/POManager.page.js')

test('end to end test', async ({page}) => {
     
    const pomanager = new POManager(page);
    const username = "rahulshettyacademy ";
    const password = "learning";
   
    const test1 = pomanager.getValidLogin();
    //await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await test1.goTo();
    await test1.validLogin(username,password);


})
