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

//deposit scenario 1: successful deposit
bank.deposit('123456', 1000);
const balanceAfterDeposit = bank.checkBalance('123456');
if (balanceAfterDeposit === 1000) {
  console.log('deposit scenario 1 passed');
} else {
  console.log('deposit scenario 1 failed');
}

//deposit scenario 2: deposit failure due to invalid amount
try {
  bank.deposit('123456', -500);
  console.log('deposit scenario 2 failed');
} catch (_) {
  console.log('deposit scenario 2 passed');
}

//withdrawal scenario 1: successful withdrawal
bank.withdraw('123456', 500);
const balanceAfterWithdrawal = bank.checkBalance('123456');
if (balanceAfterWithdrawal === 500) {
  console.log('withdrawal scenario 1 passed');
} else {
  console.log('withdrawal scenario 1 failed');
}

//withdrawal scenario 2: withdrawal failure due to insufficient funds
try {
  bank.withdraw('123456', 600);
  console.log('withdrawal scenario 2 failed');
} catch (_) {
  console.log('withdrawal scenario 2 passed');
}

//check balance scenario 1: check balance success
const currentBalance = bank.checkBalance('123456');
if (currentBalance === 500) {
  console.log('check balance scenario 1 passed');
} else {
  console.log('check balance scenario 1 failed');
}

// check balance scenario 2: Failed balance inquiry due to invalid account number
try {
  bank.checkBalance('invalid_acc_num'); 
  console.log('check balance scenario 2 failed');
} catch (error) {
  console.log('check balance scenario 2 passed');
}
