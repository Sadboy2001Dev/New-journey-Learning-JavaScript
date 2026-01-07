/*
		BOOLEAN
----------------------------------------
A boolean value represents truth or 
falsehood, on or off, yes or no. There 
are only two possible values of this 
type. The reserved words "true" and "false" 
evaluate to these two values.
Boolean values are generally the result 
of comparisons you make in your JavaScript
programs. For example:
*/

let	a = 0;
let	result = (a == 4) ? true : false;
console.log (result);

a = 4;
result = a == 4 ? true : false;
console.log (result);

//	Assign true or false value

let	bool = true;

if (bool)
	console.log (`It's ${bool}`);
else
	console.log (`It's ${bool}`);


