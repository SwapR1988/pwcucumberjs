const {mytest} = require('../pageobjects/mytest.page.js');


class POManager{
    
    constructor(page){
        this.page=page;
        this.object = new mytest(this.page);
    }

    getObject(){
        return this.object;
    }
}
module.exports = {POManager}