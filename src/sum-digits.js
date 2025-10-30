const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

  let qD=String(n).split('').map(v => Number(v)).reduce ((qN,d) => qN + d, 0);

  while(qD>9){
      qD=String(qD).split('').map(v => Number(v)).reduce ((qN,d) => qN + d, 0);
  }

 return qD
}

// function getSumOfDigits(/* n */) {
//   // Remove line below and write your code here
//   throw new NotImplementedError('Not implemented');
// }

module.exports = {
  getSumOfDigits
};
