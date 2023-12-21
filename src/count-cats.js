const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.flat().reduce( (qC, v) => v === '^^' ? qC += 1 : qC, 0);
}
//   function countCats(arr) {
//     let qCats=0;
//     for (i=0; i<arr.length; i++)
//         for (j=0; j<arr[i].length; j++){
//             if (arr[i][j] === '^^') qCats++;
//         }
//     return qCats;
// }
module.exports = {
  countCats
};
