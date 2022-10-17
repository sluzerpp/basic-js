const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str == "") return ""
  let c = 0
  let newStr = ""
  let current = ""
  current = str[0]
  for(let i =0; i < str.length; i++) {
    if (current != str[i]) {
      newStr += (c==1 ? "" : c) + current
      current = str[i]
      c = 1
    } else {
      c++
    }
  }
  newStr += (c==1 ? "" : c) + current
  return newStr
}

module.exports = {
  encodeLine
};
