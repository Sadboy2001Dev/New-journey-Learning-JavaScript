/*
 	VARIABLES
*/

let	number = 12;
console.log (number);

number = 23;
console.log (number);

var	age = 30;
console.log (age);

age = 45;
console.log (age);

let	names = new Array ();
names = ["Gil", "Kupessa", "Cruz", "Carlos"];
console.log (names);

let	Person = {
	name: 'Gil',
	surname: 'Kupessa',
	status: 'online'
};
console.log (Person)

function double_number (num) {
	num *= 2;
	return num;
};

console.log (double_number (345));

class	Vehicle {
	constructor (name, engine) {
		this.name = name;
		this.engine = engine;
	}

	getInfo () {
		return `${this.name} motor ${this.engine}`;
	}
}

let	car = new Vehicle ('Tesla', 'V8');

console.log (car.getInfo ());

car = new Vehicle ('Ford', 'V6');
console.log (car.getInfo ());

let	date = new Date ();

console.log (date); // actual date and time
