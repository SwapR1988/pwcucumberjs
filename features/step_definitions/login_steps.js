const { Given, When, Then } = require('@cucumber/cucumber');
const {DataHandling} = require('../../utils/DataHandling')
//const { POManager } = require('../../pageobjects/POManager.page.js');



let objectnew;

Given('User log in to URL',{timeout: 10*5000}, async function () {
    
    objectnew = this.poManager.getObject();

    await objectnew.goTo();
});

const dh =new DataHandling();
When('User enters the {string}',{timeout: 10*5000} ,async function (testdata) {
   //  myTestnew = this.poManager.getObject();
    await dh.readData(testdata);
    const username = await dh.getData('username')
    console.log(username)
    const password = await dh.getData('password')
    console.log(password)
    await objectnew.validLogin(username, password);
});

When('User select Student from the dropdown', async function () {
    await this.page.selectOption('select.form-control', 'Student');
});

When('User select the accept policy', async function () {
    await this.page.check('#terms');  // Update selector as per your page object
});

Then('User logs in successfully', async function () {
    await this.page.click('#signInBtn'); // Update selector as needed
    await this.page.waitForTimeout(3000);
    await browser.close();
});
