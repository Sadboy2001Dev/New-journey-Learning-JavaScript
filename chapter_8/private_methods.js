/*
 * private properties - ES2020 introduced a private properties in classes
 * using "#".
 */

// private propriety
class   bankAccount {
        // private
	#credit

	constructor (inicialCredit) {
                this.#credit = inicialCredit
        }

        deposit (value) {                                                                 this.#credit += value
        }

        getCredit () {
                return this.#credit
        }

        getMoney (money) {
                if (money <= this.#credit)
                        return this.#credit -= money
                else
                        return `Error: doesn't has enought money`
        }
}

let account = new bankAccount (2000);
console.log (account.getCredit ());

account.deposit (500);
console.log (account.getCredit ());

account.getMoney (900);
console.log (account.getCredit ());
