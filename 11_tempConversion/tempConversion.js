const convertToCelsius = function (temp) {
  const result = ((temp - 32) * 5) / 9;
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function (temp) {
  const result = (temp * 9) / 5 + 32;
  return Math.round(result * 10) / 10;
};

//or return parseFloat(result.toFixed(1)); if you want trailing zeros

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
