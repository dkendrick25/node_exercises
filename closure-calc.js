// ## Make a calculator with a closure
//
// Same concept as the counter. But this time, it's a calculator, you can do more that just count. You can add and subtract to the number that's hidden in the closure, and then access it via the getNumber() method. makeCalculator will return an object, and it will have the methods: getNumber, add, subtract, and times.
//
// var calc = makeCalculator();
// console.log(calc.getNumber()); // outputs 0
// calc.add(4);
// console.log(calc.getNumber()); // outputs 4
// calc.subtract(2);
// console.log(calc.getNumber()); // outputs 2
// calc.times(3);
// console.log(calc.getNumber()); // outputs 6

function makeCalculator() {
  var sum = 0;
  return {
    add: function(x) {
       sum += x;
    },
    subtract: function(x) {
       sum -= x;
    },
    times: function(x) {
      sum *= x;
    },
    getNumber: function() {
      return sum;
    }
  };

}

var calc = makeCalculator();
console.log(calc.getNumber());
calc.add(4);
console.log(calc.getNumber());
calc.subtract(2);
console.log(calc.getNumber());
calc.times(3);
console.log(calc.getNumber());
