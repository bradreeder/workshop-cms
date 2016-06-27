var http = require('http');

var message = "Happy happy joy joy";

function handler(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(message);
  response.end();
}

var server = http.createServer(handler);

server.listen(3000, function(){
  console.log("Server is running on port 3000. Ready to accept requests!");

});
