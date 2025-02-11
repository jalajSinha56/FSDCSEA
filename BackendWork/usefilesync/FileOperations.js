const fs = require('fs');

function datawrite(){
    try{
        fs.writeFileSync("data.txt","Hello Node Js using Fs module");
        console.log("data written successfully");
    }catch(err){
        console.log("Error while writing the data:"+err);
    }
}

function dataread(){
    try{
        const rf = fs.readFileSync("data.txt",{encoding:'utf-8'});
        return rf;
    }catch(err){
        console.log("Error while reading the data:"+err);
    }
}

function appendfile(){
    fs.appendFileSync("data.txt","appending using append module");
    console.log("data append successfully");
}

const obj1={
    datawrite:datawrite,
    dataread:dataread,
    appendfile:appendfile
}

module.exports=obj1;
