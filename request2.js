var request = require("request");
var fs = require('fs');
var url = process.argv[2];
var fileName = process.argv[3];
request(url, function(err, response, body) {
  if(err) {
    console.log(err);
    return;
  }
  fs.writeFile(fileName, body, function(err) {
    if (err) {
      console.log(err);
      return;
    }
  });
});
