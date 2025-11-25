const {test} = require("@playwright/test")
const {POManager} = require('../pageobjects/POManager.page.js')
const dataSet = JSON.parse(JSON.stringify(require('../utils/testdata.json')))


for(const data of dataSet){
test(`end to end test ${data.username}`, async ({ page }) => {
    
    const poManager = new POManager(page);
    // const username = "rahulshettyacademy ";
    // const password = "learning";
    
    
    const myTestnew = poManager.getObject(); 

    await myTestnew.goTo();
    await myTestnew.validLogin(data.username,data.password) 
   
})
}