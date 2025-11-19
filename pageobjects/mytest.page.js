class mytest{

    constructor(page){
        this.page=page;
        this.username=page.locator("//input[@id='username']")
        this.password = page.locator("//input[@id='password']")
        this.acceptpolicy= page.locator("//input[@id='terms']")
        this.signinbtn = page.locator("//input[@id='signInBtn']")
    }

    async  goTo(){
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    }

    async validLogin(username,password){
        
    await this.username.fill(username)
    await this.password.fill(password)

    await page.selectOption('select.form-control', 'Student');

    await this.acceptpolicy.check();
    await this.signinbtn.click();
    }
}

module.exports = {mytest};