const {test} = require("@playwright/test")
const {POManager} = require('../pageobjects/POManager.page.js')

test('end to end test', async ({ page }) => {
    
    const poManager = new POManager(page);
    const username = "rahulshettyacademy ";
    const password = "learning";
    
    
    const myTest = poManager.getObject(); 

    await myTest.goTo();
    await myTest.validLogin(username,password)

    await page.pause(10000)
})