const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth (arr) {
  if (Array.isArray(arr)) {
  let maxDepth = 0;
  let calculator = this;
  arr.forEach(function(elem){
  maxDepth = Math.max(maxDepth, calculator.calculateDepth(elem));
  });
  return maxDepth + 1;
  }
  else {
  return 0;
  }
  }
  };