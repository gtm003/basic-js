const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = false;
  let nameTeam ='';
    function FirstLetter (str) {
      if (typeof str == 'string') nameTeam = nameTeam + str.trim()[0];
    }
  if (Array.isArray(members)) {
    members.forEach(FirstLetter);
    result = nameTeam.toUpperCase().split('').sort().join('');
  } 
  return result;
};
