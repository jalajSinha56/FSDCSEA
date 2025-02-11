const {dataread,datawrite}=require('./FileOperations');
const a = dataread("data.txt")
const b = datawrite("data.txt")
console.log("Read operation"+" "+a)
console.log("Write operation"+b)