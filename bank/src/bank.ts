// Indicates the type for all bank accounts in the bank
interface BankAccount {
  name: string;
  age: number;
  accountNumber: string;
  balance: number;
}

/**
 * Bank class that manages all bank accounts in the bank
 */
export default class Bank {
  // array to store all bank accounts in the bank
  private accounts: BankAccount[] = [];

  /**
   * Method to find a bank account in the bank
   * @param {string} accountNumber Account number of the bank account to find
   * @returns Bank account if found, otherwise undefined
   */
  private findAccount(accountNumber: string): BankAccount | undefined {
    return this.accounts.find(acc => acc.accountNumber === accountNumber);
  }

  /**
   * creates a new account with a unique account number
   * @param {string} name -- name of the customer
   * @param {number} age -- age of the customer
   * @param {string} accountNumber -- account number of the customer
   * @returns Bank account -- the created account
   */
  public createAccount(name: string, age: number, accountNumber: string): BankAccount {
    const isAccExists = this.findAccount(accountNumber);
    if (isAccExists) {
      throw new Error('Account already exists');
    }
    const account = {name, age, accountNumber, balance: 0};
    this.accounts.push(account);
    return account;
  }

  /**
   * Deposits an amount into the bank account
   * @param {string} accountNumber -- account number of the bank account
   * @param {number} amount -- amount to deposit
   * @returns void
   */
  public deposit(accountNumber: string, amount: number): void {
    if (amount <= 0) {
      throw new Error('Deposit amount must be greater than zero');
    }
    const account = this.findAccount(accountNumber);
    if (!account) {
      throw new Error('Account not found');
    }
    account.balance += amount;
  }

  /**
   * Withdraws an amount from the bank account
   * @param {string} accountNumber -- account number of the bank account
   * @param {number} amount -- amount to withdraw
   * @returns void
   */
  public withdraw(accountNumber: string, amount: number): void {
    if (amount <= 0) {
      throw new Error('Withdrawal amount must be greater than zero');
    }
    const account = this.findAccount(accountNumber);
    if (!account) {
      throw new Error('Account not found');
    }
    if (account.balance < amount) {
      throw new Error('Insufficient funds');
    }
    account.balance -= amount;
  }

  /**
   * Checks the balance of the bank account
   * @param {string} accountNumber -- account number of the bank account
   * @returns number -- balance of the bank account
   */
  public checkBalance(accountNumber: string): number {
    const account = this.findAccount(accountNumber);
    if (!account) throw new Error('Account not found');
    return account.balance;
  }
}