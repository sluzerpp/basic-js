const { NotImplementedError } = require('../extensions/index.js');

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
function dateSample(str) {
  if (typeof str != "string") return false;
  let n = +str
  if (isNaN(n) || n === undefined || n < 0) return false;
  if (n < 0) return false;
  
  let k = 0.693 / HALF_LIFE_PERIOD

  let result = Math.ceil(Math.log(MODERN_ACTIVITY/n)/k)
  if (result < 0) return false;
  if (result === Infinity) return false;
  return result
}

module.exports = {
  dateSample
};
