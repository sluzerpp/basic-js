const { NotImplementedError } = require('../extensions/index.js');

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
  let result = {}
  domains = domains.map(el => el.split("."))
  domains.forEach((el,index) => {
    el = el.reverse()
    for (let i = 0; i<el.length; i++ ) {
      let s = "." + el.slice(0,i+1).join(".")
      if (result[s] == undefined) {
        result[s] = 1
      } else {
        result[s]++
      }
    }
  })
  return result
}

module.exports = {
  getDNSStats
};
