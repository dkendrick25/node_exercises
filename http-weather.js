var http = require('http');
var request = require('request');

function getErrorHTML(city, err) {
  return `
  <h1>No weather info for ${city}</h1>
  <p>${err.message}</>
  `;
}
//back tic allows you to write multi line
function getHTML(data) {
  var html = `
  <html>
  <meta charset="utf8">
  <title>${data.name}</title>
  <body>
  <h1>${data.name}</h1>
  <p>
  Temp: ${data.main.temp}°<br>
  Weather: ${data.weather[0].description}</p>
  </body>
  </html>
  `;
  return html
};


var server = http.createServer(function(request, response) {
  var url = request.url;
  var city = url.substring(1);

  getWeather(city, function(err, data) {
    var html;
    if (err) {
    html = getErrorHTML(city, err);
    response.write(html);
  } else {
    console.log('no err');
    html = getHTML(data);
    response.write(html);
  }

    response.end();
  });

}).listen(8000, function() {
  console.log("listening on port 8000");
});

function getWeather(city, callback) {
  request({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    qs: {
      q: city,
      units: 'imperial',
      APPID: 'eac2948bfca65b78a8c5564ecf91d00e'
    }
  }, function(err, response, body) {
    if (err) {
      // call the callback
      callback(err);
      return;
    }
    // convert the body in JSON format to a JS object
    var data = JSON.parse(body);
    if (data.cod === "404") {
      callback(new Error('No weather info'));
      return;
    }
    // call the callback, passing null for err to signal success
    callback(null, data);
  });
}
