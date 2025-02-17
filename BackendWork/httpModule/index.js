const http = require('http');
const PORT = 2525;
const server = http.createServer((req,res)=>{
    console.log("Inside Server Body");
    res.setHeader('Content-Type','text/html')
    res.write("<div style = 'background-color:coral'><h2 style = 'color:cyan',>Welcome to Node Server</h2></div>");
    res.end("<h2>Server has ended</h2>");
})
server.listen(PORT, ()=>{
    console.log("Server is running on port : "+PORT);
})
