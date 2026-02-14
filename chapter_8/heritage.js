/*
 * class can inherit properties of other classes
 */
class Eletronic {
	construct (mark, ram) {
		this.mark = mark;
		this.ram = ram;
	}

	desc () {
		console.log (`${this.mark} with ${this.ram} of RAM`);
	}
};

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
};

let lenovo = new PC ('Lenovo x230', 12, '500 GB');
lenovo.desc ();
lenovo.memory ();
