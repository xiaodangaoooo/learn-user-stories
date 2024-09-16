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
  }}