const promise=require('fs').promises;
const fsp=promise.writeFile('data.txt',"Hello using FS promises to write data");
fsp.then(()=>{
    console.log("Data Written Successfully");
}).catch((err)=>{
    console.log("Error "+err);
}).finally(()=>{
    console.log("Done");
})


async function readFileAsync(){
    const data = await promise.readFile('data.txt',{encoding: 'utf-8'});
    console.log(data)
}

readFileAsync();
