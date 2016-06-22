var http = require('http');
var title = 'Hello';
//back tic allows you to write multi line
var html = `
<html>
<title>${title}</title>
<link href="style.css" rel="stylesheet">
<script src="script.js"></script>
<body>
<h1>Hello world</h1>
<p>I am a Node.js server, and I can send back a web page</p>
</body>
</html>
`;
var css =`
body {
  background-color: yellow;
}
`;
var javascript = `
 alert('hello world');
`;
var server = http.createServer(function(request, response) {
  var url = request.url;
  if (url === '/') {
    response.write(html);
  } else if (url === "/style.css") {
    response.write(css);
  } else if(url === "/script.js") {
    response.write(javascript);
  }

  response.end();
}).listen(8000, function() {
  console.log("listening on port 8000");
});
