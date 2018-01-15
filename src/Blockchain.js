const Block = require('./Block')

class Blockchain {

  constructor () {
    this.chain = [this.createGenesisBlock()]
    this.difficulty = 4
  }

  createGenesisBlock () {
    return new Block('genesis')
  }

  getLastBlock () {
    return this.chain[this.chain.length - 1]
  }

  async addBlock (block) {
    block.index = this.chain.length
    block.previousHash = this.getLastBlock().hash
    block.mine(this.difficulty)

    this.chain.push(block)
    return true
  }

  async proveWork (transaction) {
    if(transaction) {
      return this.addBlock(new Block(transaction))
    } else {
      return null
    }
  }

}

module.exports = Blockchain
