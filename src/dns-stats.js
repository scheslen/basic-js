const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  let oResult={}
  for(let i in domains){
    let aDd=domains[i].split('.');
    let aD=[];
    let n=1;
    aD[0]=`.${aDd[aDd.length-1]}`
    for (k=aDd.length-2; k>-1; k--){
        aD[n]=aD[n-1]+`.${aDd[k]}`;
        n++;
    }

    for (let j in aD)
    if (aD[j] in oResult) oResult[aD[j]] +=1;
    else oResult[aD[j]] = 1;
  }

  return oResult;
}

// function getDNSStats(/* domains */) {
//   // Remove line below and write your code here
//   throw new NotImplementedError('Not implemented');
// }

module.exports = {
  getDNSStats
};
