const fs = require("fs");
const{URLSearchParams} = require('url');
 
 const RequestHandler = (req, res) => {
  console.log("Request Received:", req.url, req.method);

  res.setHeader("Content-Type", "text/html");

  // =========================
  // HOME PAGE
  // =========================
  if (req.url === "/" && req.method === "GET") {
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

    return res.end();
  }

  // =========================
  // BUY PRODUCT
  // =========================
  if (req.url === "/buy-product" && req.method === "POST") {
    console.log("Form Data Received.");

    const buffer = [];

    req.on("data", (chunk) => {
      buffer.push(chunk);
    });

    req.on("end", () => {
      const body = Buffer.concat(buffer).toString();

      console.log("Raw Body:", body);

      const urlParams = new URLSearchParams(body);

      const bodyJson = {};

      for (const [key, value] of urlParams.entries()) {
        bodyJson[key] = value;
      }

      console.log("Form Data:", bodyJson);

      // Save data into buy.txt
      fs.writeFileSync(
        "buy.txt",
        JSON.stringify(bodyJson, null, 2)
      );

      // Redirect to products page
      res.statusCode = 302;
      res.setHeader("Location", "/products");

      return res.end();
    });

    return;
  }

  // =========================
  // PRODUCTS PAGE
  // =========================
  if (req.url === "/products" && req.method === "GET") {
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Products</title>
        </head>

        <body>
          <h1>Product list will appear here.</h1>
          <p>Your product preference has been received.</p>
        </body>
      </html>
    `);

    return res.end();
  }

  // =========================
  // 404 PAGE
  // =========================
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
};

module.exports = RequestHandler;