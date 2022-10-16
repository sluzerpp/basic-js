const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arrr) {
  if (!Array.isArray(arrr)) throw new Error("'arr' parameter must be an instance of the Array!")
  let arr = arrr.slice(0)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--double-next") {
      if (arr[i+1] != null) {
        arr[i] = arr[i+1]
      } else {
        arr.splice(i,1)
      }
      return transform(arr)
    }
    if (arr[i] == "--double-prev") {
      if (arr[i-1] != null) {
        arr[i] = arr[i-1]
      } else {
        arr.splice(i,1)
      }
      return transform(arr)
    }
    if (arr[i] == "--discard-next") {
      if (arr[i+1] != null) {
        arr.splice(i,2)
      } else {
        arr.splice(i,1)
      }
      return transform(arr)
    }
    if (arr[i] == "--discard-prev") {
      if (arr[i-1] != null) {
        arr.splice(i-1,2)
      } else {
        arr.splice(i,1)
      }
      return transform(arr)
    }
   }
   return arr
}

module.exports = {
  transform
};
