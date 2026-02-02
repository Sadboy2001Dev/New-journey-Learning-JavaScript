// Getter and Stter Properties

let obj = {
	// An ordinary data property data_prop: value,
 
	// An accessor property defined as a pair of functions
	get accessor_prop() { /* function body here */ },
	set accessor_prop(value) { /* function body here */ }
};


let p = {
	// x and y are regular read-write data properties.
	x: 1.0,
	y: 1.0,
 
	// r is a read-write accessor property with getter and setter.
	// Don't forget to put a comma after accessor methods.

	get r() { return Math.sqrt(this.x*this.x + this.y*this.y); },
	set r(newvalue) {
		var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);
		var ratio = newvalue/oldvalue;
		this.x *= ratio;
		this.y *= ratio;
	},
	
	// theta is a read-only accessor property with getter only.
	get theta() { return Math.atan2(this.y, this.x); }
};

let q = p; // Create a new object that inherits getters and setters
q.x = 0, q.y = 0; // Create q's own data properties
console.log(q.r); // And use the inherited accessor properties
console.log(q.theta);
