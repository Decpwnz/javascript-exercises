const reverseString = function (string) {
  // 1. split string into array
  return (
    string
      .split("")
      // 2. reverse array
      .reverse()
      // 3. join back array into string
      .join("")
  );
};

// Do not edit below this line
module.exports = reverseString;
