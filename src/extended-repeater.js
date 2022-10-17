const { NotImplementedError } = require('../extensions/index.js');

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
  let separator = "";
  if (options.separator == undefined) {
    options.separator = "+"
  }
  separator = options.addition
  options.additionSeparator = options.additionSeparator == undefined ? "|" : options.additionSeparator
  for(let i = 2; i <= options.additionRepeatTimes; i++) {
    separator += options.additionSeparator + options.addition
  }
  separator = separator == undefined ? "" : separator
  let newStr = str + separator;
  for(let i = 2; i <= options.repeatTimes; i++) {
    newStr += options.separator + str + separator
  }
  return newStr
}

module.exports = {
  repeater
};
