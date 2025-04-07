// Load the built-in \HTTP module
const http = require('http');

//Create a basic web server
const server = http .createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello, Node.js World!🚀')
});

//Start the server
const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
