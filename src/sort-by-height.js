const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let aRes=[];

  if (arguments.length> 0 && arr.length>0){
    let nMin = 0;
    for (let i=0; i<arr.length; i++){
      aRes[i]=arr[i];
      if (aRes[i] !== -1){
            for (let j=i+1; j<arr.length; j++){
              if (arr[j]!== -1 && arr[j]< aRes[i]){
                nMin=aRes[i];
                arr[i]=arr[j];
                aRes[i]=arr[j];
                arr[j]=nMin;
              }
            }
      }
    }
  }
  return aRes;
}
// function sortByHeight(/* arr */) {
//   // Remove line below and write your code here
//   throw new NotImplementedError('Not implemented');
// }

module.exports = {
  sortByHeight
};
