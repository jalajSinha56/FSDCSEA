const http = require('http');
const fs = require('fs').promises;
const port = 7071;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-method','GET,POST,DELETE,PUT,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');

    if(req.method=="OPTIONS"){
        res.statusCode=200;
        return res.end();
    }


    if (req.url == "/register" && req.method == "POST") {
        let body = "";
        let arr = [];
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', async () => {
            const { name, email, password } = JSON.parse(body);
            console.log("Register API hit with data:", { name, email, password });
            const fsdata = await fs.readFile('student.json', { encoding: 'utf-8' });
            arr = JSON.parse(fsdata);
            const result = arr.find(ele => ele.email == email);
            if (result) {
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ "message": "This email is already registered with us, please try another email id" }));
            } else {
                arr.push({ name, email, password });
                await fs.writeFile('student.json', JSON.stringify(arr, null, 2));
                res.end(JSON.stringify({ "message": "/register API hit successfully" }));
            }
        });
    }

    if (req.url == "/login" && req.method == "POST") {
        let body = "";
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', async () => {
            const { email, password } = JSON.parse(body);
            console.log("Login API hit with data:", { email, password }); // Log email and password
            const fsdata = await fs.readFile('student.json', { encoding: 'utf-8' });
            const arr = JSON.parse(fsdata);
            const result = arr.find(ele => ele.email == email && ele.password == password);
            if (result) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ "message": "success" }));
            } else {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ "message": "Invalid Credentials" }));
            }
        });
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});