var http = require('http');
var fs = require('fs');
var path = require('path');
var querystring = require('querystring');

function handler(request, response) {

  var url = request.url;
  console.log(url);
  var method = request.method;
  console.log(method);

  if (url.length === 1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile(__dirname + "/.." + '/public/index.html', function(err, file){

      if (err) {
        throw err;
        return;
      }

      response.end(file);
    });
  } else if (url.indexOf('/create-post') > -1) {
    var allTheData = '';
    request.on('data', function (chunkOfData) {
        allTheData += chunkOfData;
    });

    request.on('end', function () {
        var convertedData = querystring.parse(allTheData);
        console.log(convertedData);
        response.writeHead(302, {"Location": "/"});
        response.end();
    });
  } else if (url.indexOf('/node') > -1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>NODE</h1>");
    response.end();
  } else if (url.indexOf('/girls') > -1) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>GIRLS</h1>");
    response.end();
  } else {
    fs.readFile(__dirname + "/.." + '/public' + url, function(err, file){
      if (err) {
        console.log(err);
        response.end();
        return;
      }

      switch(path.extname(url)) {
        case '.css' :
          var contentType = 'text/css';
          break;
        case '.jpg' :
          var contentType = 'image/jpeg';
          break;
        case '.ico' :
          var contentType = 'image/x-icon';
          break;
        default: break;
      }

      response.writeHead(200, {"Content-Type": contentType });
      response.end(file);
    });
  }
}

module.exports = handler;
