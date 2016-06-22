var http = require('http');

http.createServer(function(req, response) {
  response.writeHead(200);
  response.write("Helloooooo ");
  response.end();
}).listen(8000);
