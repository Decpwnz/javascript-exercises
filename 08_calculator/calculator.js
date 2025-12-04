const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (arr) {
  // let num = 1;
  // for (let i = 0; i < arr.length; i++) {
  //   num = num * arr[i];
  // }
  const result = arr.reduce((acc, curr) => acc * curr, 1);
  return result;
};

const power = function (number, power) {
  // let num = 1;
  // for (let i = 0; i < power; i++) {
  //   num = num * number;
  // }
  // return num;

  return Math.pow(number, power);
};

const factorial = function (number) {
  let num = 1;
  for (let i = number; i > 0; i--) {
    num = num * i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
