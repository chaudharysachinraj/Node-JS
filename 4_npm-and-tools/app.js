// Core Module 
const http = require("http");

//Local Module
const RequestHandler = require('./requestHandler');


// Create Server
const server = http.createServer(RequestHandler);

// Port
const PORT = 3000;

// Start Server
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
}); 