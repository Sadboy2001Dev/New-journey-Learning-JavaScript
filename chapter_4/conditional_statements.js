/*
	CONDITIONAL STATEMENTS
--------------------------------------
Conditional statements execute or skip
other statements depending on the 
value of a specified expression. These 
statements are the decision points of 
your code, and they are also sometimes 
known as “branches.” If you imagine a 
JavaScript interpreter following a 
path through your code, the 
conditional statements are the places 
where the code branches into two or 
more paths and the interpreter must 
choose which path to follow.

The condicional statements are: if, 
if/else and switch.
*/

/*
	If statement
--------------------------------
Is the fundamental control 
statement that allows JavaScript 
to make decisions, or, more 
precisely, to execute statements 
conditionally.

if (expression)
	statement

*/

let	username = null;
if (!username)
	username = 'Johnson and Johnson';
console.log (username);

let	age = 19;
if (age >= 17)
	console.log ('You Can vote');

let	address = null;
if (!address) {
	address = "";
	message = "Please specify a mailing address!";
}
console.log (message);

/*
	if/else statement
 ---------------------------------
if statement introduces an else clause that is executed when
expression is false. Its syntax is:
if (expression)
	statement1
else
	statement2 
 */
if (!username)
	console.log ("Didn't introduces the user name");
else
	console.log ("The username is: " + username);

age = 12;
if (age > 17)
	console.log ("You can vote");
else
	console.log ("You can't vote");

/*
 	else if statement
----------------------------------
The if/else statement evaluates an 
expression and executes one of two 
pieces of code, depending on the 
outcome. But what about when you 
need to execute one of many pieces 
of code? One way to do this is 
with an else if statement. else if 
is not really a JavaScript 
statement, but simply a frequently 
iused programming idiom that results
when repeated if/else statements are used:

if (n == 1) {
	// Execute code block #1
}
else if (n == 2) {
	// Execute code block #2
}
else if (n == 3) {
	// Execute code block #3
}
else {
	// If all else fails, execute block #4
}

 */

let n = 4;

if (n === 1) {
	n += 1;
	console.log (n);
}
else if (n === 2) {
	n += 2;
	console.log (n);
}
else if (n === 3) {
	n += 3;
	console.log (n);
}
else {
	n = Math.floor (Math.random () * 100);
	console.log (n);
}

/*
	switch statement
----------------------------------
An if statement causes a branch in 
the flow of a program’s execution, 
and you can use the else if idiom 
to perform a multiway branch. This 
is not the best solution, however,
when all of the branches depend on 
the value of the same expression.
In this case, it is wasteful to 
repeatedly evaluate that 
expression in multiple if 
statements.

The switch statement handles 
exactly this situation. The 
switch keyword is followed by an 
expression in parentheses and a 
block of code in curly braces:

switch(n) {

case 1:		// Start here if n == 1
	 // Execute code block #1.
 break;		 // Stop here
 
 case 2: 	// Start here if n == 2
	 // Execute code block #2.
 break; 	// Stop here

 case 3: 	// Start here if n == 3
 	// Execute code block #3.
 break; 	// Stop here

default: 	// If all else fails...
 	// Execute code block #4.
 break; 	// stop here
}

*/

function convert(x) {
	switch (typeof x) {
		case 'number': // Convert the number to a hexadecimal integer
			return x.toString(16);
		case 'string': // Return the string enclosed in quotes
			return '"' + x + '"';
		default: // Convert any other type in the usual way
			return String(x);
	}
}

console.log (convert (12.89));
console.log (convert ("Another test"));
console.log (convert ( ["Okay", "12", 9]));
