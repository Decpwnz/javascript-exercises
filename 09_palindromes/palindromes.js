const palindromes = function (string) {
  const punctuation = /[\.,?!]/g;
  const newStr = string
    .replace(punctuation, "")
    .toLowerCase()
    .split(" ")
    .join("");
  console.log("newStr", newStr);

  const reversedString = newStr.split("").reverse().join("");
  return newStr === reversedString;
};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
