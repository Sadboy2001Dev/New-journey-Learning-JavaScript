/*
 * A method is nothing more than a JavaScript function that is stored in a
 * property of an object.
 */

let Car = {
	color: 'blue',
	engine: 'V8',
	model: '4x4',

	desc: function() {
		console.log ('Car color is ' + this.color + ', motor ' + this.engine + ' and model ' + this.model)
	} // method, use this keyword to refer to this object
};

Car.desc (); // function inside the obj: "Method", invocated
