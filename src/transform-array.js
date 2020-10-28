const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let i = 0,
      //j = 0,
  arrNew = [];
  if (Array.isArray(arr)) {
    while (i < arr.length) {
      switch (arr[i]) {
        case '--discard-next':
          //console.log (i + ')   ' + arr[i] + '  ->  ' + arrNew[i]);
          i += 2;
          break;
        case '--discard-prev':
          arrNew.splice(i-1, 2);
          //console.log (i + ')   ' + arr[i] + '  ->  ' + arrNew[i]);
          i++;
          break;
        case '--double-next':
          arrNew [i] = arr [i+1];
          //console.log (i + ')   ' + arr[i] + '  ->  ' + arrNew[i]);
          i++;
        break;
        case '--double-prev':
          arrNew [i] = arrNew [i-1];
          //console.log (i + ')   ' + arr[i] + '  ->  ' + arrNew[i]);
          i++;
          break;
        default:
        arrNew [i] = arr [i];
        //console.log (i + ')   ' + arr[i] + '  ->  ' + arrNew[i]);
        i++;
      }
    }
  }
  else {
    throw new Error('arr не является массивом')
  }
  for (j = 0; j < arrNew.length; j++) {
    if (arrNew[j] == undefined) {
      arrNew.splice(j, 1);
      j--;
    }
  }
return arrNew;
};
