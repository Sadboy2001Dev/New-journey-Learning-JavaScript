/*
 * iterators protocol enable any object to be iterable.
 */

/*class Log {
	constructor () {
		this.messages = [];
	}

	add (message) {
		this.messages.push ({ message, timestamp: Date.now () });
	}
}*/

/* The iteration protocol says that if your class provides a symbol method
* Symbol.iterator that returns an object with iterator behavior, it is
* then iterable!
* Let’s modify our Log class to have a Symbol.iterator method:
*/

class Log {
	constructor () {
		this.messages = [];
	}

	add (message) {
		this.messages.push ({ message, timestamp: Date.now () });
	}
	
	[Symbol.iterator] () {
		return this.messages.values ();
	}
}

const log = new Log ();
log.add ("first day at sea");
log.add ("spotted whale");
log.add ("spotted another vessel");

for (let entry of log)
	console.log (`${entry.message} @ ${entry.timestamp}`);

// Fibonacci sequence
class FibonacciSequence {
	[Symbol.iterator] () {
		let a = 0;
		let b = 1;

		return {
			next () {
				let rval = { value: b, done: false };
				b += a;
				a = rval.value;
				return rval;
			}
		};
	}
}

const fib = new FibonacciSequence ();

let i = 0;
for (let n of fib) {
	console.log (n);
	if (++i > 9) break;
}
