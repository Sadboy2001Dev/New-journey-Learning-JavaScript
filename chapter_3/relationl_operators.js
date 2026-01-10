/*
 		RELATIONAL OPERATORS
 -------------------------------------------------
 The relational operators is used to compare two
 values and return a boolean value (true or false),
 usually used in control statement as if, for,
 while, etc.
 */

/*
	EQUALITY OPERATOR
 -------------------------------------------
 The == and === operators check whether two
 values are the same, using two different
 definitions of sameness.

The  === operator is known as the strict
equality operator (or sometimes the 
identity operator), and it checks whether 
its two operands are “identical” using a 
strict definition of sameness. 

The == operator is known as the equality 
operator; it checks whether its two 
operands are “equal” using a more relaxed 
definition of sameness that allows type 
conversions.

The != and !== do the same comparasion
the verify if its different.
*/
let	a = 12;
let	b = "12";

if (a == b)
	console.log ("There are equals (==)");
else
	console.log ("There are different (==)");

if (a === b)
	console.log ("There are equals (===)");
else
	console.log ("There are different (===)");

b = 12;

if (a === b)
	console.log ("Now there are equals (===)");
else
	console.log ("Still different (===)");

if ("1" == true)
	console.log (`"1" is equal to true (==)`);
else
	console.log (`"1" is inequal to true (==)`);
