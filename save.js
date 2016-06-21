var fs = require('fs');
var contents = "Hello, here is some text";
var filename = "data.txt";

fs.writeFile(filename, contents, function(error) {
  if (error) {
    console.log(error);
    return;
  }
  console.log('wrote ' + filename);
});
