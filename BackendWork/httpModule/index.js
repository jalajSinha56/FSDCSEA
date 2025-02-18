const http = require('http');
const PORT = 2525;
const server = http.createServer((req, res) => {
    console.log("Inside Server Body");
    if (req.url == '/' && req.method == 'GET') {
        res.setHeader('Content-Type', 'text/html')
        // console.log(Object.keys(req));
        //console.log(req.url+" "+req.method);
        res.write("<div style='background-color:red'><h2 style='color:cyan'>Welcome to Node Server</h2></div>");
        res.end("<h2>Server has ended</h2>");
    }

    if (req.url == '/show' && req.method == 'POST') {
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify({
            msg: "successfully hit the post API @/ show"
        }))
    }
})
server.listen(PORT, () => {
    console.log("Server is running on port : " + PORT);
})
