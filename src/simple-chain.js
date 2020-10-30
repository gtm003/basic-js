const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: arr = [],
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    this.str.push(value);
    //console.log('addLink  ' + this.str);
    return this;
  },
  removeLink(position) {
    if ((position ^ 0) === Math.abs(position) && position < this.str.length) {
      this.str.splice(position - 1, 1);
      //console.log('removeLink  ' + this.str);
      return this;
    } else {
      chainMaker['str'] = [];
      throw new Error('ошибка');
      return this;
    }
  },
  reverseChain() {
    this.str = this.str.reverse();
    //console.log('reverseChain  ' + this.str);
    return this;
  },
  finishChain() {
    let finish = '';
    //console.log(this.str);
    //console.log(finish);
    this.str.forEach(function(item, i, arr) {
      item ='~( ' + item + ' )~';
      finish = finish + item;
    });
    finish = finish.substring(1, finish.length - 1);
    chainMaker['str'] = [];
    return finish;
  }
};

module.exports = chainMaker;
