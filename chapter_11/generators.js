/*
 * Generators are functions that use an iterator to control their
 * execution. A regular function takes arguments and returns a value, but
 * otherwise the caller has no control of it. When you call a function, 
 * you relinquish control to the function until it returns.
 * Not so with generators, which allow you to control the execution of
 * the function.
 * Generators bring two things to the table: the first is the ability to
 * control the execution of a function, having it execute in discrete
 * steps. The second is the ability to communicate with the function as
 * it executes.
 * A generator is like a regular function with two exceptions:
 * 	• The function can yield control back to the caller at any point.
 * 	• When you call a generator, it doesn’t run right away. Instead, 
 * 	you get back an iterator. The function runs as you call the
 * 	iterator’s next method.
 * Generators are signified in JavaScript by the presence of an asterisk
 * after the function keyword; otherwise, their syntax is identical to
 * regular functions. If a function is a generator, you can use the yield 
 * keyword in addition to return.
 */

function* rainbow () { // the asterisk marks this as a generator
	yield 'red';
	yield 'orange';
	yield 'yellow';
	yield 'green';
	yield 'blue';
	yield 'indigo';
	yield 'violet';
}

const it = rainbow();
it.next (); // { value: "red", done: false }
it.next (); // { value: "orange", done: false }
it.next (); // { value: "yellow", done: false }
it.next (); // { value: "green", done: false }
it.next (); // { value: "blue", done: false }
it.next (); // { value: "indigo", done: false }
it.next (); // { value: "violet", done: false }
it.next (); // { value: undefined, done: true }

// or we cam use a for..of loop
for (let color of rainbow ()) {
	console.log(color);
}

/*
 * 	yield Expressions and Two-Way Communication
 * --------------------------------------------------------
 * We mentioned earlier that generators allow two-way communication
 * between a generator and its caller. This happens through the yield
 * expression. Remember that expressions evaluate to a value, and because 
 * yield ius an expression, it must evaluate to something. What it
 * evaluates to are the arguments (if any) provided by the caller every
 * time it calls next on the generator’s iterator.
 */

function * interrogate () {
	const name = yield "What is your name?";
	const color = yield "What is your favorite color?";
	return `${name}'s favorite color is ${color}.`;
}

const itr = interrogate ();
console.log (itr.next ()); // { value: "What is your name?", done: false }
console.log (itr.next ('Ethan')); // { value: "What is your favorite color?", done: false }
console.log (itr.next ('orange')); // { value: "Ethan's favorite color is orange.", done: true }

