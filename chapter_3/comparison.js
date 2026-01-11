/*
	COMPARISON OPERATORS
 -----------------------------------
 The comparison operators test the 
 relative order (numerical or
 alphabetics) of their two operands.
*/

//	LESS THAN (<) AND GREATER THAN (>)
if (2 > 4)
	console.log ("2 is greater than 4");
else
	console.log ("Comparison was false");

if ("10" >  9)
	console.log ("\"10\" is greater than 9");

if (120 < 2026)
	console.log ("True, 120 < 2026");

let age = 18;
if (age < 20)
	console.log ("Age is less than 20 years old");

//	LESS THAN OR EQUAL (<=)
if (age <= 18)
	console.log ("Age is less than or equal to18");
else
	console.log ("Age is greater than or equal to 18");

//	GREATER THAN OR EQUAL (>=)
let	$dollar = 200.88;

if ($dollar >= 200)
	console.log ("Passed: has enough money to pay");
else
	console.log ("Don't has enough money!");
