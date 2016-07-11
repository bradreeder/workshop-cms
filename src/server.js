const http = require('http');
const port = process.env.PORT || 4000;
const handler = require('./handler.js')

http.createServer(handler).listen(port);

console.log(`Server is currently running on port ${port}`);
