const {test} = require("@playwright/test")
const {POManager} = require('../pageobjects/POManager.page.js')
const dataSet = JSON.parse(JSON.stringify(require('../utils/testdata.json')))

test('end to end test', async ({ page }) => {
    
    const poManager = new POManager(page);
    // const username = "rahulshettyacademy ";
    // const password = "learning";
    
    
    const myTestnew = poManager.getObject(); 

    await myTestnew.goTo();
    await myTestnew.validLogin(dataSet.username,dataSet.password) //data from json

    await page.pause()
})