/*
 	Constants
*/

const	money = ['Kwanza', 'Dollar', 'Rand', 'Euro', 'Rublo'];
console.log (money [0]); // Kwanza

money [0] = 'Franc'; // changing Kwanza to Franc
console.log (money [0]); // Franc

function add (a, b) { return a + b };

const	result = add (12, 9);
console.log (result); // 21

//result = add (8, 2);
//console.log (result); // TypeError: Assignment to constant variable

class	Car {

	constructor (name, model) {
		this.name = name;
		this.model = model;
	};

	info () {
		return `This is a ${this.name}, model ${this.model}`;
	};
};

const	toyota = new Car ('Toyota', '4X4');

console.log (toyota.info ()); // This is a Toyota, model 4X4

const	runner = {
	name: 'Carlos',
	age: 50,
	id: 2001,
	pot: 'B'
};

const	Carlos = Object.keys (runner);//TypeError: Assignment to constant variable.

Carlos = Object.values (runner);//TypeError: Assignment to constant variable.
console.log (Carlos);
