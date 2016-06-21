var fs = require('fs');

var buffer = fs.readFile('hello.txt', function(error, buffer) {
  if(error) {
    console.log(error);
  }
  var contents = buffer.toString();
  var contents2 = contents.toUpperCase();

  fs.writeFile('hello.txt', contents2, function(error) {
    if(error) {
      console.log(error);
    }

  });
  console.log(contents);
});
