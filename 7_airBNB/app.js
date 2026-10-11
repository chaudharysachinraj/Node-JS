// Core Module 
const path = require('path');

// External Module 
const express = require("express");
const bodyParser = require("body-parser");

// Local Module 
const hostRouter = require("./routers/hostRouter");
const storeRouter = require("./routers/storeRouter");
const rootDir = require('./util/path-util');

const app = express();

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(storeRouter);
app.use("/host", hostRouter);


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
