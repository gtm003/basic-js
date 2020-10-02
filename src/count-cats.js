const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    let result = 0;
    function count (arr) {
      for (i = 0; i < arr.length; i++) {
        if (arr[i] === '^^') result++;
      }
    }
  backyard.forEach(count);
  return result;
};
