/*
 * constructor (prolerties) - is a method called when an object is
 * created. It's used to initialized the object's properties.
 */
class Smartphone {
	constructor (make, system, version) {
		this.make = make;
		this.system = system;
		this.version = version;
	}
	// method to descrive the phone's information
	desc () {
		console.log (`This is a ${this.make} phone, ${this.system} system and version number ${this.version}`);
	}
};

let samsung = new Smartphone ('Samsung Z-fold', 'Android', 15);
samsung.desc ();
