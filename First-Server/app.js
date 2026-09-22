const http = require("http");

console.log("I was here");

const requestHandler = (req, res) => {
  console.log("Request Received", req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>Welcome To First Server</h1>
            </body>
            </html>
        `);
        res.end();
};

const server = http.createServer(requestHandler);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${3000}`);
});
