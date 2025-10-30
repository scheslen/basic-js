const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let sResult='';
  if (arguments.length >0 && typeof str === 'string' && str.length >1) {
    let cS = str[0];
    let i = 1;
    let sQ = 1;
    while (i < str.length){
      if (str[i] === cS){
             sQ++;
      }
      else {
        sResult += sQ > 1 ? String(sQ) + cS : cS;
        sQ = 1;
        cS = str[i]
      }
      i++;
    }
     sResult += sQ > 1 ? String(sQ) + cS : cS;
  }
  return sResult;
}

// function encodeLine(/* str */) {
//   // Remove line below and write your code here
//   throw new NotImplementedError('Not implemented');
// }

module.exports = {
  encodeLine
};
