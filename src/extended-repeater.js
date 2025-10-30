const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  sResult='';
  if(typeof(str) !== 'string') str=String(str);
  let sAdd='';
  if (options.addition !== undefined) sAdd=options.addition;
  if(typeof(sAdd) !== 'string') sAdd=String(sAdd);
  
  let qStr=1;
  let qAdd=1;
  if (options.repeatTimes !== undefined) qStr=options.repeatTimes;
  if (options.additionRepeatTimes !== undefined) qAdd=options.additionRepeatTimes;
  let sSep='+';
  let sAddSep='|';
  if (options.separator !== undefined) sSep=options.separator;
  if (options.additionSeparator !== undefined) sAddSep=options.additionSeparator;

  for (let i=0; i<qStr; i++){
    sResult+=str;
    for(let j=0; j<qAdd-1; j++){
      sResult+=sAdd+sAddSep;
    }
    if(qAdd>0) sResult+=sAdd;
    sResult+=sSep;
  }
  if (qStr>0 && sSep.length>0) sResult=sResult.slice(0, sResult.length-sSep.length);

  return sResult;
  }


// function repeater(/* str, options */) {
//   // Remove line below and write your code here
//   throw new NotImplementedError('Not implemented');
// }

module.exports = {
  repeater
};
