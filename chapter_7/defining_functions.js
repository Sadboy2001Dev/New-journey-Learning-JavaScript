// Print the name and value of each property of o. Return undefined.
let obj = {x:12, y: 0};
function printprops (o) {
	for (let p in o) 
		console.log(p + ": " + o[p]); 
};

printprops (obj);

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance (x1, y1, x2, y2) {
	let dx = x2 - x1;
	let dy = y2 - y1;
	return Math.sqrt((dx * dx) + (dy * dy));
};

console.log (distance (2, 2, 10, 4));

// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
	if (x <= 1) return 1;
	return x * factorial(x-1);
};

console.log (factorial (3));

// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
let square = function (x) { return x * x; };

// Function expressions can include names, which is useful for recursion.
let f = function fact(x) {
	if (x <= 1) return 1;
	else return x * fact (x-1);
};

console.log (f (4));

// Function expressions can also be used as arguments to other functions:
let data = [12, 0, 20, -2, -1, 1, 4];
data = data.sort(function(a,b) { return a-b; });

console.log (data.join (' '));

// Function expressions are sometimes defined and immediately invoked:
let tensquared = (function(x) { return x * x;}(10));

console.log (tensquared);

// functions may be nested within other functions.
function hypotenuse(a, b) {
	function square(x) { return x * x; }
	return Math.sqrt(square(a) + square(b));
};

console.log (hypotenuse (2, 4));
