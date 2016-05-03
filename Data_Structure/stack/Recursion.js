'use strict';
var Stack = require('./Stack');

// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Here is a recursive function to compute the factorial of any number:

var num = 5;

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n-1);
}


console.log(num + '! = ' + factorial(num));

function factorialbyStack(n) {
  var stack = new Stack();
  var result = 1;
  for (var i = 1; i < n + 1; i++) {
    stack.push(i);
  }
  for (var i in stack.dataStore) {
    result *= stack.pop(i);
  }
  return result;
}

console.log(num + '! = ' + factorialbyStack(num));