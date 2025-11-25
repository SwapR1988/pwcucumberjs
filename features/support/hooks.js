const { chromium } = require('playwright');
const { POManager } = require('../../pageobjects/POManager.page.js');
const { Before, After, BeforeStep, AfterStep } = require('@cucumber/cucumber');


Before(async function(){
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
})

BeforeStep(async function(){
    await this.page.screenshot({path: 'BeforeStep.png', fullpage:true})
})

// AfterStep(async function(result){
//    if(result.status===Status.FAILED)
//    {
//     await this.page.screenshot();
//    }
// })

After(async function(){
    console.log("Completed")
})