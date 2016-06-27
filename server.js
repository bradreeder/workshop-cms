var myModule = require('./src/handlers.js');
var http = require('http');

var server = http.createServer(myModule);

server.listen(3000, function(){
  console.log("Server is running on port 3000. Ready to accept requests!");
});
