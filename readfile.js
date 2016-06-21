var fs = require('fs');

var buffer = fs.readFileSync('hello.txt');

console.log(buffer);

var stringContents = buffer.toString();
console.log(stringContents);
