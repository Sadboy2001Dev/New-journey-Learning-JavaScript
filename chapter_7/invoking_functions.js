// Invoking functions (calling a function)

let whoiam = function (name) { // created a function
	console.log ('I am ' + name) // shows who I am
};

whoiam ('Gil'); // function invoked: I am Gil

function square (x) { // function to calculate the square
	return x * x // return de square
};

let squareOfTwo = square (2); // function invoked and its value was stored
console.log (squareOfTwo);

function isObject (o) {
	if (typeof o === 'object') return true;
	return false;
}

let obj = new Object ();
console.log ('obj is Object? ' + isObject (obj));

let a = new Array ();
console.log ('a is Object? ' + isObject (a));

let n = 12;
console.log ('n is Object? ' + isObject (n));
