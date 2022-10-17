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
  constructor (direct = true) {
    this.direct = direct;
    this.alphabet = Array(26).fill(null).map((_, i) => String.fromCharCode('A'.charCodeAt() + i));
  }
  encrypt(message, key) {
    if (message == undefined || key == undefined) throw new Error("Incorrect arguments!")
    if (!message || !key) throw new Error("Incorrect arguments!") 
    return this.runCrypt(message, key, 'encrypt');
  }   
  decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined) throw new Error("Incorrect arguments!")
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!") 
    return this.runCrypt(encryptedMessage, key, 'decrypt');
  }
  encryptChar(fromChar, keyChar) {
    const idx = (this.alphabet.indexOf(fromChar) + this.alphabet.indexOf(keyChar)) % 26;
    return this.alphabet[idx];
  }
  decryptChar(fromChar, keyChar) {
    const idx = (this.alphabet.indexOf(fromChar) - this.alphabet.indexOf(keyChar) + 26) % 26;
    return this.alphabet[idx];
  }
  getCryptCharMethod(method) {
    return method === 'encrypt' ? this.encryptChar : this.decryptChar;
  }
  runCrypt(message, key, method = 'encrypt') {
    const cryptChar = this.getCryptCharMethod(method).bind(this);
    let result = '';
    let j = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();
    
    if (!this.direct) message = message.split('').reverse();

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        result += cryptChar(message[i], key[j]);
        j++;
      } else {
        result += message[i];
      }

      if (j === key.length) j = 0;
    }
    
    return result;
  }

}

module.exports = {
  VigenereCipheringMachine
};
