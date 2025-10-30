const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(aMem) {
  let aLet=[];
  let qLet=0;
  if (arguments.length < 1) return false;
  if (!Array.isArray(aMem)) return false;

  for (i in aMem){
      if (typeof(aMem[i])==='string'){
        aLet[qLet++]=aMem[i].toUpperCase().trim()[0];
      }
  }

  return aLet.sort().join('');
}
// function createDreamTeam(/* members */) {
//   // Remove line below and write your code here
//   throw new NotImplementedError('Not implemented');
// }

module.exports = {
  createDreamTeam
};
