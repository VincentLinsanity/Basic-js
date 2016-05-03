var Stack = require('./Stack');

function isPalindrome(word) {
  var forward = new Stack();
  var backward = '';
  for (var i = 0; i < word.length; i++) {
    forward.push(word[i]);
  }
  while (forward.length() > 0) {
    backward += forward.pop();
  }
  if (word === backward) {
    return true;
  }
  return false;
}

var word = "hello";
if (isPalindrome(word)) {
 console.log(word + " is a palindrome.");
}
else {
 console.log(word + " is not a palindrome.");
}
word = "racecar"
if (isPalindrome(word)) {
 console.log(word + " is a palindrome.");
}
else {
 console.log(word + " is not a palindrome.");
}
