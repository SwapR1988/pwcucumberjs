const {test} = require("@playwright/test")
const {POManager} = require('../pageobjects/POManager.page.js')
const dataSetArray = require('../Dataset.json');


test('end to end test', async ({ page }) => {
    
    const poManager = new POManager(page);

    const field = dataSetArray.Student[0];
    // const username = "rahulshettyacademy ";
    // const password = "learning";
    
    
    const myTestnew = poManager.getObject(); 

    await myTestnew.goTo();
    await myTestnew.validLogin(field)

    await page.pause()
})