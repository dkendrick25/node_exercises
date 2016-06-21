var fs = require('fs');

var fileName = process.argv[2];

fs.readFile(fileName, function(error, buffer){
  if (error) {
    console.log(error);
    return;
  }

  var contents = buffer.toString();
  var lines = contents.split("\n");
  console.log("lines: " + lines.length);
  console.log("Character: " + contents.length);
});
