const {mytest} = require('../pageobjects/mytest.page.js');


class POManager{
    
    constructor(page){
        this.page=page;
        this.objectnew = new mytest(this.page);
    }

    getObject(){
        return this.objectnew;
    }
}
module.exports = {POManager}