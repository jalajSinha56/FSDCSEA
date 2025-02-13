const fs=require('fs');
fs.writeFile('data.txt',"Welcome to the FSD Session",()=>{
    console.log("Data Written succesfully");
})
fs.readFile('data.txt',(err,data)=>{
    if (err){
        console.log("Error while reading the data");
    }
    console.log(data.toString());
})