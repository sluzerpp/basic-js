const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = []
  n = n.toString()
  for(let i = 0; i < n.length; i++) {
    arr[i] = n
    arr[i] = arr[i].split("")
    arr[i].splice(i,1)
    arr[i] = arr[i].join("")
  }
  console.log(arr)
  arr = arr.map((el) => Number(el))
  console.log(arr)
  return Math.max(...arr)
}

module.exports = {
  deleteDigit
};
