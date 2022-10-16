const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    if (value === "") this.arr.push("")
    else this.arr.push("" + value)
    return this
  },
  removeLink(position) {
    if (typeof position != "number") {
      this.arr = []
      throw new Error("You can't remove incorrect link!")
    }
    if (position < 1) {
      this.arr = []
      throw new Error("You can't remove incorrect link!")
    }
    if (position > this.arr.length) {
      this.arr = []
      throw new Error("You can't remove incorrect link!")
    }
    this.arr.splice(position-1,1)
    return this
  },
  reverseChain() {
    this.arr = this.arr.reverse()
    return this
  },
  finishChain() {
    let str
    this.arr.forEach((curr,index) => {
      if (index < this.arr.length-1) {
        str += `( ${curr} )~~`
      } else {
        str += `( ${curr} )`
      }
    },"")
    arr = []
    this.arr = []
    return str.replace("undefined","")
  }
};

module.exports = {
  chainMaker
};
