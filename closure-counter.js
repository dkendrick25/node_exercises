// ## Make a counter with a closure
//
// Make a counter using closure such that the actual counter variable is hidden. You would use the counter/count function like this:
//
// var count = makeCounter();
// console.log(count()); // outputs 1
// console.log(count()); // outputs 2
// console.log(count()); // outputs 3, etc


function counter() {
  var counter = 0;
   function getCount() {
    return counter++;
  }
  return getCount;
}

var count = counter();
//calling the function referred to the function of the count variable
console.log(count());
console.log(count());
console.log(count());
console.log(count());
