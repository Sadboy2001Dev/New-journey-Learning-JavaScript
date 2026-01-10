/*
 * 	BASIC ARITHMETIC OPERATORS
 * -------------------------------------
 *  The basic operators are:
 *  (+) addition
 *  (-) subtraction
 *  (*) multiplication
 *  (/) divison
 *  (%) module
 */

//	Addition
let	num1 = 26;
let	num2 = 20;
let	result = num1 + num2;
console.log (result); // 46

num1 = '20';
num2 = 26;
result = num1 + num2;
console.log (result); // 2026: num2 was converted to string and concated with num1

result = num2 + num1;
console.log (result); // 2620: num2 was converted to string

//	Subtraction
let	n1 = 26;
let	n2 = 20;
let	res = n1 - n2;
console.log (res); // 6

n1 = '26';
res = n1 - n2;
console.log (res); // 6: n1 was converted to number and subtracted

res = n2 - n1;
console.log (res); // -6

//	Multiplication
n1 = 12;
n2 = 4;
let	product = n1 * n2;
console.log (product); // 48

n1 = '11';
product = n1 * n2;
console.log (product); // 44: n1 was converted to number and multiplied

//	Divison
res = product / n2;
console.log (res); // 11;

res = product / n1;
console.log (res); // 4

res = n1 / n2;
console.log (res); // 2.75

console.log (n1 / 0); // infinity
console.log (0 /0); // NaN

//	Modulo

console.log (12 % 2); // 0
console.log ('12' % '2'); // 0: the result is of type number
console.log ('12' % 7); // 5: result of type number

/*
 * 	INCREMENT AND DECREMENT
 * --------------------------------------
 *  (++A and A++) are increment operator
 *  (--B and B--) are decrement operator
 *  When the position of the sign is before
 *  the expression then is pre-increment
 *  when the position of the sign is after
 *  then is pos-increment
 *  
 */

let	pos_increment = 1;
result = pos_increment++;
console.log (result); // 1
console.log (pos_increment); // 2

let	pre_increment = 1;
res = ++pre_increment;
console.log (res); // 2
console.log (pre_increment); // 2

let	pos_decrement = 2;
result = pos_decrement--;
console.log (result); // 2
console.log (pos_decrement); // 1

let	pre_decrement = 2;
res = --pre_decrement;
console.log (res); // 1
console.log (pre_decrement); // 1

