const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(numArr) {
  let sum = 0;
	numArr.forEach((num) => {sum += num});
  return sum;
};

const multiply = function(numArr) {
  const productOfAllNums = arr.reduce((total, num) => {return total * num}, 1);
};

const power = function() {
	
};

const factorial = function() {
	
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
