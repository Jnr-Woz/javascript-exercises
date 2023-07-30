const convertToCelsius = function(fahrValue) {
  // x °F ≘ (x − 32) × 5/9°C
  return Number.parseFloat(((fahrValue - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(celsiusValue) {
  // x °C ≘ (x × 9/5 + 32) °F
  return Number.parseFloat((celsiusValue * (9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
