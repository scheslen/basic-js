const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(rDate) {
  if (arguments.length<1)   return 'Unable to determine the time of year!';

  if (typeof(rDate)!='object' || Object.prototype.toString.call(rDate)!=='[object Date]') throw Error('Invalid date!');
 // if (!isNaN(rDate.getFullYear()) && !isNaN(rDate.getMonth())) throw Error('Invalid date!');

 try{
     let wDate = new Date(rDate.toString());
 }
 catch {
  throw Error('Invalid date!');
 }

 if (Object.getOwnPropertyNames(rDate).length>0) throw Error('Invalid date!');

  let rMonth=rDate.getMonth();
  if (isNaN(rMonth) || rMonth<0 || rMonth>11) throw Error('Invalid date!');

  if (rMonth >=2 && rMonth<=4) return 'spring';
  if (rMonth >=5 && rMonth<=7) return 'summer';
  if (rMonth >=8 && rMonth<=10) return 'autumn';
  if (rMonth >=11 || rMonth<=1) return 'winter';

}


// function getSeason(/* date */) {
//   // Remove line below and write your code here
//   throw new NotImplementedError('Not implemented');
// }

module.exports = {
  getSeason
};
