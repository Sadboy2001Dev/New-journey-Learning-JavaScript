/*
 * Unlike other languages with exception handling, in JavaScript, you
 * can throw any value: a number or a string, or any other type. However, 
 * it’s conventional to throw an instance of Error. Most catch blocks
 * expect an instance of Error. Keep in mind that you can’t always control
 * where the errors you throw are caught.
 */

class Account {
	
	constructor (balance, pay) {
		this.balance = balance;
		this.pay = pay;
	}

	transfer (pay, amount) {
		pay = pay - amount;
		return pay;
	}
}

let account = new Account (1200, 1200, );

function billPay(amount, payee, account) {
	if(amount > account.balance)
		throw new Error("insufficient funds");
	account.transfer(payee, amount);
}

billPay (1200, 1200, 100);
