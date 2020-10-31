const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let defaultOptions = { 
  repeatTimes: 0,
  separator: '+',
  addition: '',
  additionRepeatTimes: 0,
  additionSeparator: '|' },
  localOptions = Object.assign(defaultOptions, options);
  /*
  console.log(localOptions.repeatTimes);
  console.log(localOptions.separator);
  console.log(localOptions.addition);
  console.log(localOptions.additionRepeatTimes);
  console.log(localOptions.additionSeparator);
  */
  let resalt = '';
  //resalt += str;
  //resalt += localOptions.addition;
  if (localOptions.repeatTimes > 0 || localOptions.repeatTimes == undefined) {
    
    for (i = 1; i < localOptions.repeatTimes; i++) {
    resalt += str;
    if (localOptions.additionRepeatTimes > 0) {
      for (j = 1; j < localOptions.additionRepeatTimes; j++) {
      resalt += localOptions.addition + localOptions.additionSeparator;
    }
    resalt += localOptions.addition;  'la+sla+sla+'
    }
    
    resalt += localOptions.separator;
    //resalt += str;
    //resalt += localOptions.addition;
  }
  resalt += str;
    if (localOptions.additionRepeatTimes > 0 || localOptions.additionRepeatTimes == undefined) {
      for (j = 1; j < localOptions.additionRepeatTimes; j++) {
      resalt += localOptions.addition + localOptions.additionSeparator;
    }
    resalt += localOptions.addition;
  }
  }
  return resalt;
};
  