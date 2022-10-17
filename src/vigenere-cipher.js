const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (rev=true) {
    this.rev = rev
  }

  encrypt(text, key) {
    if (text == undefined || key == undefined) throw new Error("Incorrect arguments!")
    if (!text || !key) throw new Error("Incorrect arguments!") 
    let l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let c = 0
    text = text.toUpperCase()
    let square = this.getSquare()
    let s = "";
    key = key.toUpperCase()
    console.log(square)
    for (let i = 0; i < text.length; i++) {
      if (l.includes(text[i])) {
        s += square[l.indexOf(text[i])][l.indexOf(key[(i-c) % key.length])];
      } else {
        s += text[i]
        c++
      }
    }
    if (!this.rev) {
      return s.split().reverse().join()
    }
    return s;
  }
  decrypt(cipher,key) {
    if (cipher == undefined || key == undefined) throw new Error("Incorrect arguments!")
    if (!cipher || !key) throw new Error("Incorrect arguments!") 
    key = key.toUpperCase()
    cipher = cipher.toUpperCase()
    if (!this.rev) {
      cipher = cipher.split().reverse().join()
    }
    let square = this.getSquare()
    let l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let s = "";
    let coll
    let c = 0
    for (let i = 0; i < cipher.length; i++) {
      if (l.includes(cipher[i])) {
        let row = l.indexOf(key[(i-c) % key.length])
            coll = square[row].indexOf(cipher[i]);
        s += l[coll];
      } else {
        s += cipher[i]
        c++
      }
    }
    if (!this.rev) {
      return s.split().reverse().join()
    }
    return s;
  }

  getSquare () {
    let l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", square = [];
    for (let i = 0; i < l.length; i++) {
        square[i] = l.slice(i).concat(l.slice(0, i));
    }
    return square
  }

}

module.exports = {
  VigenereCipheringMachine
};
