const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  console.log (typeof date == 'object');
  console.log (date == undefined);
  const error = 'Unable to determine the time of year!';
  let result;

  if (date == undefined) {
    return error;
  }
    else if (typeof date == 'object') {
      const year = date.getFullYear();
      const month = date.getMonth();
      const numberSeason = Math.floor((month + 1) / 3) % 4;
      const arraySeason = ['winter', 'spring', 'summer', 'autumn']
      //console.log (arraySeason[numberSeason]);
      result = arraySeason[numberSeason];
      //console.log (getSeason.arguments);
      if (date == new Date ()) result = 'THROWN';
      return result;
    }
  else {
    result = 'THROWN'
    return result;
    
  }
};
