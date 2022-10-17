const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let num = arr.slice(0)
  num = num.filter(el => el !== -1)
  num = num.sort((a,b) => a - b)
  arr.forEach((el,index)=> {
    if (el == -1) {
      num.splice(index,0,-1)
    }
  })
  return num
}

module.exports = {
  sortByHeight
};
