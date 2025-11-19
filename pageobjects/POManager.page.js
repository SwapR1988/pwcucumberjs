const {mytest} = require('../pageobjects/mytest.page.js')

class POManager{

    constructor(page){
        this.page=page;
        this.test1 = new mytest(this.page)
    }

    getValidLogin(){
        return this.test1;
    }

}

    module.exports={POManager}