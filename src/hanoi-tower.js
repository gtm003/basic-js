const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let resalt = {
    turns:0,
    seconds: 0
  };
resalt.turns = Math.pow (2,disksNumber) - 1;
resalt.seconds = Math.floor(3600 / turnsSpeed * resalt.turns);
return resalt;
};
