function makeAdder(x) {
  // x is a inner varible
  function add(y) {
    return x + y; // has a closure over it
  }
  return add;
}

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);

plusOne(3); // 1 + 3;
plusTen(3); // 10 + 3;
