const { Blockchain, Wallet, Exchange } = require('./src')

const coin = new Blockchain()

const rocky = new Wallet('rocky', 12345)
const brittany = new Wallet('brittany', 3245)

async function simulateTransactions () {

  let count = 0, i
  for(i = 0; i < 20; i++) {

    let transaction
    const random = Math.random()
    if(random > 0.5) {
      transaction = Exchange.transact(rocky, brittany, random * 10)
    } else {
      transaction = Exchange.transact(brittany, rocky, random * 10)
    }

    await coin.proveWork(transaction)
    const block = coin.chain[i + 1]

    if(block){
      print(block)
    }

    if(++count === 20) {
      return
    }
  }
}

async function run () {
  await simulateTransactions()
  console.log('****************************************************************************************')
  print(rocky);
  print(brittany)
}

function print (x) {
  console.log(JSON.stringify(x, null, 4))
}

run()