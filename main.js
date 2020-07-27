'use strict'


//create a Account Class
class BankAccount {
  //the account number on this bankaccount
accountNumber;
  //the name of the owner of the bank account
accOwner;
  //array of Transaction instances against this bankaccount
transactions
  //create a contractor with with account #, owner, Tran
constructor(accountNum, accOwner, transactions) {
    this.accountNum = accountNum;
    this.accOwner = accOwner;
    this.transactions = [];
}
  //this method , should take in an amount, and add a new Transaction
  //as a deposit to this bank account  
deposit(amt){

    if(amt > 0) { //only allows deposits that are greater then zero

      //1. create a transaction instance using amount passed in
    let newTransaction = new Transaction(amt, "Deposit");
      //2. add this newly created transaction to the transaction array
    this.transactions.push(newTransaction);

    }
}
/**
  * returns the current balance on the account by suming up this
  * transactions amount
  */
balance(){

    let sum = 0;

    //how can you use higher order function here.
    // for i is less than the transactions length 
    for(let i = 0; i < this.transactions.length; i++){
      //create a current transaction to represent the position in transactions
    let currentTransaction = this.transactions[i];
      //sum is equal to sum plus the current transaction amount
    sum = sum + currentTransaction.amount;
    }
    //then we will return the sum at the end to show the sum at the end.
    return sum;
}
charge(payee, amt){
    /**
     * TODO: currently this will allow me to overcharge
     * add code to prevent overcharging.
     * HINT: you can call the Balance() to get the balance before the charge
     */

     // if the amount is less than balance allow else do nothing
    if(amt < this.balance()){
       //craeting a mock transaction
    let newCharge = new Transaction(-amt, payee);
      //pushing the newCharge into the transaction   
    this.transactions.push(newCharge)
    }
}

}
class Transaction {
constructor(amount ,payee) {
    this.date = new Date();
    this.amount = amount;
    this.payee = payee;

  }

}

/****************************** */
let acct1 = new BankAccount("672391349", "Jimmy Cool");

console.log(acct1.accountNum);
console.log(acct1.accOwner);
console.log(acct1.balance());

acct1.deposit(100);
console.log(acct1.balance());

acct1.deposit(-200);// shouldn't be allowed!! 
console.log(acct1.balance());

acct1.charge('Target', 30.50);
acct1.charge('Freebirds', 15.15);
console.log(acct1.balance());// 54.35

acct1.charge('Diamond Shop', 1000);// charge shouldn't be allowed
console.log(acct1.balance());//54.35

acct1.charge('Target', -20);//refund
console.log(acct1.balance());
