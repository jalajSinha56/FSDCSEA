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
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f5f5f5;
        }

        .container {
            display: flex;
            flex-direction : row;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        .product-card {
            border: 1px solid #ddd;
            background: white;
            border-radius: 10px;
            padding: 15px;
            width: 250px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .product-card img {
            width: 100%;
            height: 200px;
            object-fit: contain;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
        }

        .product-card div {
            margin: 10px 0;
        }

        .product-card .category {
            font-weight: bold;
            color: #444;
        }

        .product-card .description {
            font-size: 14px;
            color: #666;
            height: 60px;
            overflow: hidden;
        }

        .product-card .price {
            font-weight: bold;
            color: #2a9d8f;
            font-size: 18px;
        }
    </style>
    </head>
    <body>
    <div class = "container">${
        jsondata.map(ele=>
        {
            return(
                   `<div class = "product-card">
                        <div>${ele.id}</div>
                        <img src = ${ele.image} height=100px width=100px/>
                        <div class = "category">${ele.category}</div>
                        <div class = "description">${ele.description}</div>
                        <div class = "price">Rs. ${ele.price}</div>
                    </div>`
            )
        }
        )
    }
    </div>
    </body>
    </html>`
    res.end(htmltemplate);
})
server.listen(PORT,()=>{
    console.log("Server is running on--->"+PORT);
}
)