const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const { URLSearchParams } = require("url");

const app = express();

app.use(bodyParser.urlencoded());

app.use((req, res, next) => {
  console.log("Request Recived", req.url, req.method);
  next();
});

app.get("/", (req, res, next) => {
  res.send(`
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
  
              <input
                type="text"
                placeholder="Enter the product that you want"
                name="product"
                required
              >
  
              <input
                type="number"
                placeholder="Enter Your budget"
                name="budget"
                required
              >
  
              <input type="submit" value="Buy Product">
  
            </form>
          </body>
        </html>
      `);
});


app.post("/buy-product", (req, res) => {
  const bodyJson = req.body;

  console.log("Form Data:", bodyJson);
  fs.writeFileSync("buy.txt", JSON.stringify(bodyJson, null, 2));

  res.statusCode = 302;
  res.setHeader("Location", "/products");
  res.end();
  console.log("Sending Response");
});


app.get("/products", (req, res, next) => {
  res.send(`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Products</title>
        </head>

        <body>
          <h1>Product list will appear here.</h1>
          <p>Your product preference has been received.</p>
        </body>
    </html>
    `);
});

app.use((req, res, next) => {
  res.statusCode = 404;
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404 - Page Not Found</title>
      </head>

      <body>
        <h1>404 - Page Not Found</h1>
        <p>The requested page does not exist.</p>
      </body>
    </html>
  `);
  res.end();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
