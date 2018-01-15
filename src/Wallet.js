const SHA256 = require('crypto-js/sha256')

class Wallet {

  constructor (name, quantity = 0) {
    this.address = this.createAddress()
    this.name = name
    this.balance = quantity
  }

  deposit (quantity) {
    this.balance += quantity
  }

  withdraw (quantity) {
    if(this.balance - quantity < 0) {
      return false
    } else {
      this.balance -= quantity
      return true
    }
  }

  createAddress () {
    const key = Math.random() * 100
    return SHA256(key + 'identifier').toString()
  }

}

module.exports = Wallet
