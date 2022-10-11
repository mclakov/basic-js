const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
let arr =[];
  let str = n+'';//152
  for (let i=0; i<str.length; i++) {
    let x = '';
    for (let j=0; j<str.length; j++) {
      if(i != j){
        x = x + str[j];
      }
    }
    arr.push(+x)
  }
  return Math.max(...arr)
}
module.exports = {
  deleteDigit
};
