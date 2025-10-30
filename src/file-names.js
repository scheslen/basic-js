const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names)  {
  let aRes=[];
  for (let i in names){
    if (!aRes.includes(names[i])) aRes[i] = names[i];
    else {
      let n=1;
      while (aRes.includes(names[i]+`(${n})`)) n++;
      aRes[i] = names[i]+`(${n})`;
     }
  }
return aRes;
}

// function renameFiles(/* names */) {
//   // Remove line below and write your code here
//   throw new NotImplementedError('Not implemented');
// }

module.exports = {
  renameFiles
};
