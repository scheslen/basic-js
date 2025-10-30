const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  console.log(arr);
  if (!(arr instanceof Array ) ||  !Array.isArray(arr)) throw  Error("'arr' parameter must be an instance of the Array!");
 
  let m=0;
  let aResult=[];
  for (i in arr){
    if (arr[i]==='--discard-next'){
      if(i<arr.length-1) i++;
      } else if (arr[i]==='--discard-prev'){
          if(m>0) m--;
          } else if(arr[i]==='--double-next'){
             if(i<arr.length-1) aResult[m++]=arr[i+1];
           } else if (arr[i]==='--double-prev'){
                  if(i>0) aResult[m++]=arr[i-1];
              }
         else {
            aResult[m++]=arr[i];
         }
  }
return aResult;
}
// function transform(/* arr */) {
//   // Remove line below and write your code here
//   throw new NotImplementedError('Not implemented');
// }

module.exports = {
  transform
};
