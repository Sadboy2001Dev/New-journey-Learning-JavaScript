/*
 * class can inherit properties of other classes
 */

class Person {                                                                  constructor (name, age) {
	this.name = name;
	this.age = age;
        }
	descrition () {
                console.log (`Hi, my name is ${this.name}, I'm ${this.age} years old`);
        }
}

// created Object using a Class
const Gil = new Person ('Gil', 24);

// calling a method of the class Person
Gil.descrition ();

// heritaging the Class Person
class Student extends Person {

	constructor (name, age, course) {
		super (name, age);
		this.course = course;
        }

	studying () {
		console.log (`I'm studying ${this.course}`);
        }
}

const Carlos = new Student ('Carlos Kupessa', 50, 'Mechanic Engineering');

Carlos.descrition ();
Carlos.studying ();

// created another class
class Eletronic {
	construct (mark, ram) {
		this.mark = mark;
		this.ram = ram;
	}

	desc () {
		console.log (`${this.mark} with ${this.ram} of RAM`);
	}
}

class PC extends Eletronic {

	constructor (mark, ram, hd) {
		super (mark, ram);
		this.mark = mark;
		this.ram = ram;
		this.hd = hd;
	}

	memory () {
		console.log (`${this.hd} of memory`);
	}
}

let lenovo = new PC ('Lenovo x230', 12, '500 GB');
lenovo.desc ();
lenovo.memory ();
