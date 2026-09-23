const http = require("http");
const fs = require('fs');

console.log("I was here");

const requestHandler = (req, res) => {
  console.log("Request Received", req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Myntra</title>
            </head>
            <body>
                <h1>Welcome, Please enter your preference</h1>
                <form action="/buy-product" method="POST">
                    <input type="text" placeholder="Enter the product that you want" name"product">
                    <input type="text" placeholder="Enter Your budget" name"Budget">
                    <input type="submit">
                </form>
            </body>
        </html>
    `);

  }else if( req.url === '/buy-product'){
    console.log("Form Data Received.");
    const buffer = [];
    req.on('data', (chunk) => {
        console.log(chunk);
        buffer.push(chunk);
    })
    req.on('end', () => {
        const body = Buffer.concat(buffer).toString();
        console.log(body);
    })

    fs.writeFileSync('buy.txt', 'Myntra app');
    res.statusCode = 302;
    res.setHeader('Location', '/products');
    console.log('Sending Response')

  }else if (req.url === '/products'){
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Products</title>
            </head>
            <body>
                <h1>Product list will apear here.</h1>
            </body>
        </html>
    `); 
  }else{
    res.statusCode = 404;
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Page Not Found</title>
            </head>
            <body>
                <h1>404 Page Not Found</h1>
            </body>
        </html>
    `);
  }

  res.end();
};

const server = http.createServer(requestHandler);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${3000}`);
});
