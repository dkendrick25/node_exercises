// Given this add function:
//
// function add(x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw new Error('Arguments must be numbers');
//   }
//   return x + y;
// }
//
// Use this function to add two numbers. Then use it to add two strings, while gracefully handling any errors that occurs using the try/catch statement.

function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return x + y;
}

try {
  var sum = add("a", "b");
  console.log('The sum is: ' + sum)
} catch(err) {
  console.log('error: '+ err.message);
}
