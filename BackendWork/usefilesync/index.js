const {dataread,datawrite,dataappend}=require('./FileOperations');
const read=dataread('data.txt');
const write=datawrite('data.txt');
const append=dataappend('data.txt');
const read1=dataread('data.txt');
// console.log("Read Operation "+read);
// console.log("Write Operation "+write);
// console.log("Append Operation "+append);
