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
// function transform(arrr) {
//   if (!Array.isArray(arrr)) throw new Error("'arr' parameter must be an instance of the Array!")
//   let arr = []
//   arrr.forEach((el,i) => {
//     if (typeof el == "number") {
//       if ((arrr[i-1] != "--discard-next" || arrr[i-1] != "--double-next")  
//       && (arrr[i+1] != "--discard-prev" || arrr[i+1] != "--double-prev")) {
//         arr.push(el)
//       };

//       if (arrr[i-1] == "--double-next") {
//         if (arrr[i+1] == "--discard-prev") {
//           arr.push(arrr[el])
//           return;
//         }
//         if(arrr[i+1] == "--double-prev") {
//           arr.push(el,el)
//           return;
//         }
//         arr.push(el,el)
//       }
//       if (arrr[i-1] == "--discard-next") {
//         if(arrr[i+1] == "--double-prev") {
//           return;
//         }
//         arr.pop()
//         return;
//       }
//     }
//     if (typeof el != "number" && !["--discard-next","--double-prev","--double-next","--discard-prev"].includes(el)) {
//       arr.push(el)
//     }
//   })
//   return arr;
// }

function transform(arrr) {
  if (!Array.isArray(arrr)) throw new Error("'arr' parameter must be an instance of the Array!")
  let arr = []
  for(let i=0;i < arrr.length;i++) {
    if (typeof arrr[i] == "number") {
      if ((arrr[i-1] != "--discard-next" && arrr[i-1] != "--double-next")  
      && (arrr[i+1] != "--discard-prev" && arrr[i+1] != "--double-prev")) {
        arr.push(arrr[i])
      };

      if (arrr[i-1] == "--double-next") {
        if (arrr[i+1] == "--discard-prev") {
          arr.push(arrr[i])
          continue;
        }
        if (arrr[i+1] == "--double-prev") {
          arr.push(arrr[i],arrr[i],arrr[i])
          continue;
        }
        arr.push(arrr[i],arrr[i])
        continue;
      }
      if (arrr[i-1] == "--discard-next") {
        continue;
      }
      continue;
    }
    if (typeof arrr[i] != "number" && !["--discard-next","--double-prev","--double-next","--discard-prev"].includes(arrr[i])) {
      arr.push(arrr[i])
    }
  }
  return arr;
}

module.exports = {
  transform
};
