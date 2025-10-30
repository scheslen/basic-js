const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let qChar=0;
  let aChar=(s1.length<s2.length)? s1.split('') : s2.split('') ;
  let sChar=(s1.length<s2.length)? s2 : s1;
  let P=0;
  for(i in aChar){
    P=sChar.indexOf(aChar[i]);
    if (P>=0){
       qChar++;
       sChar=sChar.slice(0,P)+sChar.slice(P+1);
    }
  }

  return qChar;
}

// function getCommonCharacterCount(/* s1, s2 */) {
//   // Remove line below and write your code here
//   throw new NotImplementedError('Not implemented');
// }

module.exports = {
  getCommonCharacterCount
};
