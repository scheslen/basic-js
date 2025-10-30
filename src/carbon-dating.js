const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
// function dateSample(/* sampleActivity */) {
//   // Remove line below and write your code here
//   throw new NotImplementedError('Not implemented');
// }

function dateSample(sActivity) {
  if (arguments.length===0) return false;
  if(typeof(sActivity) !== 'string') return false;

  let nActivity=parseFloat(sActivity);
  if(isNaN(nActivity) || nActivity===undefined || nActivity===null  ||  nActivity <= 0 ||  nActivity > 15) return false;

  let k=0.693/HALF_LIFE_PERIOD;
  let nAge=Math.ceil(Math.log(MODERN_ACTIVITY/nActivity)/k);

  return nAge;
}

module.exports = {
  dateSample
};
