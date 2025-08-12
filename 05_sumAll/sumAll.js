const sumAll = function (firstNum, lastNum) {
  let sum = 0;
  if (
    firstNum < 0 ||
    lastNum < 0 ||
    !Number.isInteger(firstNum) ||
    !Number.isInteger(lastNum)
  )
    return "ERROR";

  //   if (firstNum < lastNum) {
  //     for (let i = firstNum; i <= lastNum; i++) {
  //       sum += i;
  //     }
  //   }

  //   if (firstNum > lastNum) {
  //     for (let i = firstNum; i > 0; i--) {
  //       sum += i;
  //     }
  //   }

  //   if (firstNum > lastNum) {
  //     [firstNum, lastNum] = [lastNum, firstNum];
  //   }

  if (firstNum > lastNum) {
    const temp = firstNum;
    firstNum = lastNum;
    lastNum = temp;
  }

  for (let i = firstNum; i <= lastNum; i++) {
    sum += i;
  }

  console.log(sum);
  return sum;
};

console.log(sumAll(10, 4));

// Do not edit below this line
module.exports = sumAll;
