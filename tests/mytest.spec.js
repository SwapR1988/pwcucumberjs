const {test} = require("@playwright/test")
const {POManager} = require('../pageobjects/POManager.page.js')

test('end to end test', async ({ page }) => {
    
    const poManager = new POManager(page);
    const username = "rahulshettyacademy ";
    const password = "learning";
    
    
    const myTestnew = poManager.getObject(); 

    await myTestnew.goTo();
    await myTestnew.validLogin(username,password)

    await page.pause(10000)
})