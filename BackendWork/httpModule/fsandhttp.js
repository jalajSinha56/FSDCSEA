const fs = require('fs').promises;
const http = require('http');
const PORT = 2527;
const server = http.createServer(async(req, res) => {
    // try{
    //     res.setHeader('Content-Type','text/html');
    //     res.write("Welcome to HTTP and FS module");
    //     const data = await fs.readFile('student.json',{encoding:'utf-8'});
    //     res.write(`<h2 style = 'color:cyan'>${data}</h2>`)
    //     res.end(data); 
    // }catch(err){
    //     console.log("Error while reading file"+err);
    // }
    if(req.url=="/home" && req.method=='GET'){
        res.setHeader('Content-Type','text/html');
        const htmltemplate = await fs.readFile('home.html');
        res.end(htmltemplate);
    }
    else if(req.url=='/textdata' && req.method=='GET'){
        res.setHeader('Content-Type','text/html');
        const texttemplate = await fs.readFile('text.html');
        res.end(texttemplate);
    }
    else{
        res.setHeader('Content-Type','text/html');
        const errtemplate = await fs.readFile('error.html');
        res.end(errtemplate);
    }
})
server.listen(PORT, () => {
    console.log("Server is running on port->"+PORT);
})