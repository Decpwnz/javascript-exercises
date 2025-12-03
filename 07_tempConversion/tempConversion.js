const convertToCelsius = function (value) {
  const convertedDegrees = (value - 32) * (5 / 9);
  const roundedResult = Math.round(convertedDegrees * 10) / 10;

  return roundedResult;
};

const convertToFahrenheit = function (value) {
  convertDegrees = Math.round((value * (9 / 5) + 32) * 10) / 10;

  return convertDegrees;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
