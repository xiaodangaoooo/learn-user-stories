import Bank from '../src/bank';

//setup
const bank = new Bank();

//scenario 1
const acc = bank.createAccount('Jane doe', 25, '123456');
if (acc.accountNumber === '123456') {
  console.log('scenario 1 passed');
} else {
  console.log('scenario 1 failed');
}

//scenario 2
try {
  bank.createAccount('Jane doe', 25, '123456');
  console.log('scenario 2 failed');
} catch (_) {
  console.log('scenario 2 passed');
}
