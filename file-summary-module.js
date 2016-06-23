var fs = require('fs');


function fileSummary(fileName, callback) {

  fs.readFile(fileName, function(error, buffer){
    if (error) {
      callback(error);
      return;
    }

    var contents = buffer.toString();
    var summary = {};
    summary.lineCount = contents.split("\n").length;
    summary.charCount = contents.length;
    callback(null, summary);
  });
}

module.exports = fileSummary;
