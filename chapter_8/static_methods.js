/*
 * Static methods are used to perform generic tasks that are related to
 * the class, but not any specific instance. In a static method, this is
 * bound to the class itself, but it’s generally considered best practice 
 * to use the name of the class instead of this.
 */
class Person {

	constructor (name, age) {
		this.name = name;
		this.age = age;
		this.id = Person.getNextId ();
	}

	static getNextId () {
		return Person.nextId++;
	}
};

Person.nextId = 7959;

let gil = new Person ('Gil', 25);
let ana = new Person ('Ana', 45);
let nelma = new Person ('Nelma', 35);

console.log (gil.id);
console.log (ana.id);
console.log (nelma.id);
