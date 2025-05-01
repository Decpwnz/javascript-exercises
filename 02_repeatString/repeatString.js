const repeatString = function (string, num) {
  let init = "";

  if (num < 0) return "ERROR";

  for (let i = 0; i < num; i++) {
    init = init + string;
  }
  return init;
};

module.exports = repeatString;
