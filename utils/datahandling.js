const {genericData} = require('../features/support/hooks.js')

class datahandling{

    async readdata(testdata){
    const storedata = await genericData();
    const splitdata = testdata.split("#")
    }
}

module.exports = {datahandling}