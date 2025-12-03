const {genericData} = require('../features/support/hooks');

let testJsonData;
let data;

class DataHandling{

    async readData(testData){ //function to read data from testData.json Student#TestCase1
        try{
            
            testJsonData = await genericData(); //fetching json data from json
        
        //Splitting the testData string into array to fetch data from json
        let testDataArray = testData.split('#'); 
        const moduleData = testDataArray[0]; //Student
        const testCase = testDataArray[1]; //TestCase1
        console.log(`Module Name: ${moduleData}`)
        console.log(`Test Case Name: ${testCase}`)

        //Fetching data object using above array parameters
        data = testJsonData[moduleData][0][testCase]
        return data;
    }
    catch(error){
        console.error("Exception Cached !!", error);
    }

    }

    async getData(key){ //function to retrive value of a key from an object
        try{
            console.log(`Got data from dataset for ${key} : ${data[key]} `)
            const requiredData = data[key];
            return requiredData;
        }
        catch(error){
        console.error("Exception Cached !!", error);
    }
    }
}
module.exports={
    DataHandling
}