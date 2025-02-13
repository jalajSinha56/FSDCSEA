const fs=require('fs');

function datawrite(){
    try{
fs.writeFileSync("data.txt","Hello Node JS using fs module");
console.log("Data Written Successfully");
    }catch(err){
        console.log("Error while writting the data "+err );
    }
}
function dataread(){
    try{
        const rf=fs.readFileSync("data.txt",{encoding:'utf-8'});
        console.log(rf);
    }catch(err){
        console.log("Error while reading the data "+err);
    }
}
function dataappend(){
    try{
        fs.appendFileSync("data.txt",' Appending data');
        console.log("Appending the file Successfully");
    }catch(err){
        console.log("Error while updating the file "+err);
    }
}
// datawrite();
// dataread();
// dataread();

const obj={
    dataread:dataread,
    datawrite:datawrite,
    dataappend:dataappend
}

module.exports=obj;