/*
	NULL AND UNDEFINED
-------------------------------------
Null is a language keyword that
evaluates to a special value that is
usually used to indicate the absence
of value.

Undefined represent a deeper kind of
absence.

So the big question is which of both
you will use to assign in a variable
on your program!? The answer is: null

You might consider undefined to
represent a system-level, unexpected,
or error-like absence of value and 
null to represent program-level, 
normal, or expected absence of value.
 */

let	num = null; // absence of value
console.log (num);

let	num1 = undefined; /* absence of value but not recommended
			  to be used in this situation*/
console.log (num1);

num = 12;
num1 = num * 3
console.log (num, num1);

