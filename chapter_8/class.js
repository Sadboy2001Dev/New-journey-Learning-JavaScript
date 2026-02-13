/*
 * Prior to ES6, creating a class in JavaScript was a fussy, unintuitive
 * affair. ES6 introduces some convenient new syntax for creating classes:
 */
class Car {
	constructor (make, model) {
		this.make = make;
		this.model = model;
		this.userGears = ['P', 'N', 'R', 'D'];
		this.userGear = this.userGears [0];
	}
	shift (gear) {
		if (this.userGear.indexOf < 0)
			throw new Error (`Invalid gear ${gear}`);
		this.userGear = gear;
	}
};

/*
 * To create a specific car, we use the new keyword (instances)
 */
let car1 = new Car (); // instance of class Car
let car2 = new Car (); // instance of class Car

// Testing the instance of the class
console.log (car1 instanceof Car);
console.log (car1 instanceof Array);

console.log (car1.userGear);
car1.shift ('D');
console.log (car1.userGear);

