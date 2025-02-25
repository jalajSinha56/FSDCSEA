const http = require('http');
const fs = require('fs').promises;
const port = 7070;
const server = http.createServer((req, res) => {
    // res.end("Welcome to Node Server");
    if(req.url == "/register" && req.method == "POST"){
        let body = "";
        let arr = [];
        req.on('data', chunk => {
            body += chunk;
        })
        req.on('end', async () => {
            const {name,email,password} = JSON.parse(body);
            console.log(name);
            await fs.writeFile('student.json', JSON.stringify({name,email,password}));
        })
        res.end(JSON.stringify({"message":"/register API hit successhfully"}));
    }
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})