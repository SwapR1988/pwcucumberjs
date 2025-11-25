const { Given, When, Then } = require('@cucumber/cucumber');

//const { POManager } = require('../../pageobjects/POManager.page.js');



let myTestnew;

Given('User log in to URL', async function () {
       
    myTestnew = this.poManager.getObject();

    await myTestnew.goTo();
});

When('User enters the {string} and {string}',{timeout: 10*1000} ,async function (username, password) {
    await myTestnew.validLogin(username, password);
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
