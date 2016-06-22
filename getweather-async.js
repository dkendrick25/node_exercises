var request = require('request');
var async = require('async');

var cities = [
  'Atlanta, GA',
  'Pheonix, AZ',
  'Dallas, TX',
  'Philadelphia, PA'
];

async.map(cities, getWeather, function(err, results) {
  var temps = results.map(function(result) {
    return result.main.temp;
  });
  //to print out the max temp
  console.log('temps: ' + temps);
  //or could use
  // return Math.max(...temps); or Math.max.apply(null, temps);
  console.log(findMaxTemp(results));
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
    // call the callback, passing null for err to signal success
    callback(null, data);
  });
}

function findMaxTemp(results) {
  var max = results[0].main.temp;
  var cityName;
  for (var i = 0; i < results.length; i++) {
    if (results[i].main.temp > max) {
      max = results[i].main.temp;
      cityName = results[i].name;
    }
  }
  return ("The Hottest city is: " + cityName + " " + max);

}
