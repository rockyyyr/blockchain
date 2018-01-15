const SHA256 = require('crypto-js/sha256')

class Block {

  constructor(data){
    this.index = -1
    this.nonce = 0
    this.timestamp = this.timestamp()
    this.data = this.clone(data)
    this.previousHash = ''
    this.hash = this.calculateHash()
  }

  mine (difficulty){
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')){
      this.nonce++
      this.hash = this.calculateHash()
    }
  }

  calculateHash(){
    return SHA256(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data) + this.nonce).toString()
  }

  timestamp(){
    return new Date().valueOf()
  }

  clone(obj){
    if(obj === null || typeof(obj) !== 'object')
      return obj;

    let temp = new obj.constructor();
    for(let key in obj)
      temp[key] = this.clone(obj[key]);

    return temp;
  }

}

module.exports = Block
