// Take the program you wrote earlier in the week that read a file and printed its line count and character count, convert that into a module. The module should export a function that takes two parameters:
//
// * a file name
// * a callback function that takes two parameters
//   * a potential error object
//   * a summary object that contains the properties lineCount and charCount.
//
// The following program file-summary-program.js can be used to test your module:
//
var fileSummary = require('./file-summary-module');
var filename = process.argv[2];
fileSummary(filename, function(err, summary) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Line count:', summary.lineCount);
  console.log('Character count:', summary.charCount);
});
//
// Example output:
//
// $ node file-summary-program.js hello.txt
// Lines: 1
// Characters: 13
// $ node file-summary-program.js file-that-doesnt-exist.txt
// ENOENT: no such file or directory, open 'file-that-doesnt-exist.txt'
