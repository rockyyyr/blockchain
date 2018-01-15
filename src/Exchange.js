const Transaction = require('./Transaction')

function transact (sender, receiver, amount) {
  const sufficientFunds = sender.withdraw(amount)

  if(sufficientFunds) {
    receiver.deposit(amount)
    return new Transaction(sender, receiver, amount)
  } else {
    return false
  }
}

module.exports = { transact }
