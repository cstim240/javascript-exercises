const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) { //want sum of an array, use .reduce()
  return array.reduce((total, item) => total + item, 0); //the 0 is the initial value of the total variable
};

const multiply = function(array) {
  return array.reduce((product, element) => product * element, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	let total = 1;
  for (let i = num; i > 0; i--){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
