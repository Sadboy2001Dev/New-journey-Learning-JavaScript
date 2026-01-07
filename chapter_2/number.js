/*
 		NUMBERS
--------------------------------------------
Unlike many languages, JavaScript does not
make a distinction between integer values
and floating-point values. All numbers in
JavaScript are represented as floating-point
values. When a number appears directly in a
JavaScript program, it’s called a numeric
literal.

Note that any numeric literal can be preceded
by a minus sign (-) to make the number negative.
Technically, however, - is the unary negation operator
and is not part of the numeric literal syntax.
*/
console.log (2026); // 2026

let	num = 12;
console.log (num); // 12

const	PI = 3.14;
console.log (PI); // 3.14

var	sum = num + PI;
console.log (sum); // 15.14

let	negativeNum = - num;
console.log (negativeNum); // -12

negativeNum = -2.97;
console.log (negativeNum); // -2.97
console.log (Math.floor (negativeNum)); // round down to an integer: -2
console.log (Math.ceil (negativeNum)); // round up to an integer: -3

let	getNumber = Number ('23'); // converting a string to number
// very useful when you get number from the URL
console.log (getNumber); // 23
console.log ('23'); // 23 - same output but with little difference (color)

/*
 	  NaN and INFINITY
 -------------------------------------
JavaScript predefines global variables 
Infinity and NaN to hold the positive
(or negative) infinity and
 not-a-number (NaN) value.
*/

console.log (num/0); // Infinity (positive)
console.log (-num / 0); // -Infinity (negative)

num  = num / 0;
notIsANumber = 0/0;
console.log (notIsANumber);
