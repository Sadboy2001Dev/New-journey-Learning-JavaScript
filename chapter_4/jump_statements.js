/*
		JUMP STATEMENTS
-------------------------------------------
Another category of JavaScript statements
are jump statements. As the name implies,
these cause the JavaScript interpreter to 
jump to a new location in the source code.

The break statement makes the interpreter
jump to the end of a loop or other 
statement.
continue makes the interpreter skip the 
rest of the body of a loop and jump back to 
the top of a loop to begin a new iteration. 
JavaScript allows statements to be named, or
labeled, and the break and continue can 
identify the target loop or other statement 
label.

The return statement makes the interpreter 
jump from a function invocation back to the 
code that invoked it and also supplies the 
value for the invocation.
The throw statement raises, or “throws,” an 
exception and is designed to work with the 
try/catch/finally statement, which 
establishes a block of exception handling 
code. This is a complicated kind of jump 
statement: when an exception is thrown, 
the interpreter jumps to the nearest
enclosing exception handler, which may be 
in the same function or up the call stack 
in an invoking function.

*/


/*
	Labeled statements
-----------------------------------
Any statement may be labeled by
preceding it with an identifier and 
a colon:

	identifier: statement

By labeling a statement, you give it 
a name that you can use to refer to 
it elsewhere in your program. You 
can label any statement, although it 
is only useful to label statements
that have bodies, such as loops 
and conditionals. By giving a loop a 
name, you can use break and continue 
statements inside the body of the 
loop to exit the loop or to jump
directly to the top of the loop to 
begin the next iteration. break and 
continue are the only JavaScript 
statements that use statement labels.

Here is an example of a labeled while 
loop and a continue statement that uses
the label.

 mainloop: while(token != null) {
 	// Code omitted...
   continue mainloop; // Jump to the next iteration of the named loop
 	// More code omitted...
 }

The identifier you use to label a 
statement can be any legal 
JavaScript identifier that is not 
a reserved word.

*/

/*
 	      break
--------------------------------
The break statement, used alone, 
causes the innermost enclosing 
loop or switch statement to exit 
immediately. Its syntax is simple:
	
	break;

JavaScript also allows the break 
keyword to be followed by a 
statement label (just the 
identifier, with no colon):

	break labelname;

*/

let	matrix = [[12, 20, 23], [90, 78]];
let	sum = 0;
let	sucess = false;
computer_sum: if (matrix) {
	for (let x = 0; x < matrix.length; x++) {
		let row = matrix [x];
		if (!row) break computer_sum;
		for (let y = 0; y < row.length; y++) {
			let cell = row [y];
			if (isNaN (cell)) break computer_sum;
			sum += cell;

		}
	}
	sucess = true;
}
console.log (sum);
console.log (sucess);

/*
             continue
 ----------------------------------
 The continue statement is similar 
 to the break statement. Instead of 
 exiting a loop, however, continue 
 restarts a loop at the next 
 iteration. The continue statement’s 
 syntax is just as simple as the
 break statement’s:

	continue;

The continue statement can also be 
used with a label:

	continue labelname;

The continue statement, in both its 
labeled and unlabeled forms, can be 
used only within the body of a loop. 
Using it anywhere else causes a 
syntax error.

*/

let	data = [12, 89, 0, 77, undefined, 44, null];
let	total = 0;
for (let i = 0; i < data.length; i++) {
	if (!data [i]) continue;
	total += data [i];
}

console.log (total);

/*
	     return
 ------------------------------------
 A return statement within a function
 specifies the value of invocations 
 of that function.
 Here’s the syntax of the return 
 statement:

	return expression;

A return statement may appear only 
within the body of a function. It 
is a syntax error for it to appear 
anywhere else. When the return 
statement is executed, the function
that contains it returns the value 
of expression to its caller.

With no return statement, a function 
invocation simply executes each of 
the statements in the function body 
in turn until it reaches the end of 
the function, and then returns to its 
caller. In this case, the invocation 
expression evaluates to undefined. 

The return statement often appears as 
the last statement in a function, but 
it need not be last: a function 
returns to its caller when a return 
statement is executed, even if there
are other statements remaining in the 
function body.

*/

function square (x) { return x * x };
console.log ("Square root (2) = " + square (2));
console.log ("Square root (9) = " + square (9));

function display_object (o) {
	if (!o) return ;
	for (prop in o)
		return o[prop];
}
let	obj = {
	name: "Object",
	str: "I'm a object"
};

console.log (display_object (obj));

/*
		throw
---------------------------------------
An exception is a signal that indicates 
that some sort of exceptional condition 
or error has occurred. To throw an 
exception is to signal such an error or 
exceptional condition. To catch an 
exception is to handle it — to take 
whatever actions are necessary or
appropriate to recover from the
exception.

In JavaScript, exceptions are thrown
whenever a runtime error occurs and 
whenever the program explicitly throws 
one using the throw statement.
Exceptions are caught with the 
"try/catch/finally" statement, which
is described in the next section.
The throw statement has the following 
syntax:

	throw expression;

*/

let factorial = (x) => {
	if (x < 0) throw new Error ("x must not be negative");
	for (var f = 1; x > 1; f *= x, x--) ;
	
	return f;	
}

console.log (factorial (2));
console.log (factorial (4));
console.log (factorial (-9));

/*
	    try/catch/finally
 -----------------------------------------
The try/catch/finally statement is
JavaScript’s exception handling mechanism.
The try clause of this statement simply 
defines the block of code whose exceptions 
are to be handled. The try block is 
followed by a catch clause, which is a 
block of statements that are invoked when 
an exception occurs anywhere within the 
try block. The catch clause is followed 
by a finally block containing cleanup code 
that is guaranteed to be executed, 
regardless of what happens in the try block. 
Both the catch and finally blocks are 
optional, but a try block must be 
accompanied by at least one of these blocks.

The try, catch, and finally blocks all 
begin and end with curly braces. 
These braces are a required part of the 
syntax and cannot be omitted, even if a 
clause contains only a single statement.

Syntax:
	try {
		//block or a single code
	}
	catch () {
		// block or a single code
		// when an excepptions occurs
	}
	finally {
		// block or a single code
	}

*/


