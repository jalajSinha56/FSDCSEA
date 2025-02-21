// const fs = require('fs').promises;
const http = require('http');
const PORT = 2527;
const server = http.createServer(async(req, res) => {
    res.setHeader('Content-Type','text/html');
    const data = await fetch("https://fakestoreapi.com/products");
    const jsondata = await data.json();
    console.log(jsondata[0].category);
    const htmltemplate = `<html>
    <head>
    <title>Online Clothes Shop</title>
    <style>
    </style>
    </head>
    <body>
    <div><img src=${jsondata[2].image} height=400px width=400px/>
    ${jsondata[0].category}</div>
    </body>
    </html>`
    res.end(htmltemplate);
})
server.listen(PORT,()=>{
    console.log("Server is running on--->"+PORT);
}
)