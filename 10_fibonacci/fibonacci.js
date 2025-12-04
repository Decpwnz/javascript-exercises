const fibonacci = function (number) {
  let num;
  const arr = [0, 1];

  if (number < 0 && !isNaN(number)) return "OOPS";

  for (let i = 0; i < number; i++) {
    num = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(num);
  }
  const finalIndex = arr[arr.length - 2];

  return finalIndex;
};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
