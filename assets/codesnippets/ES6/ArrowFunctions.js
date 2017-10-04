// Old syntax
var multiply = function(x, y) {
  return x * y;
}

// New syntax
const multiply = (x, y) => {
  return x * y;
}

// Skip curly braces
const multiply = (x, y) => x * y;

//If one argument you can skip braces too
const addTwo = x => x + 2;
