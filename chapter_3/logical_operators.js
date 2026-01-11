/*
	LOGICAL OPERATORS
----------------------------------
The logical operators &&, ||, and 
! perform Boolean algebra and are 
often used in conjunction with the 
relational operators to combine 
two relational expressions into 
one more complex expression.

*/

/*	LOGICAL AND (&&)
 ---------------------------------
 It returns true if and only if 
 both its first operand and its 
 second oper and are true. If one 
 or both of these operands is 
 false, it returns false.
*/
let	a = 0;
let	b = 0;
if (a == 0 && b == 0)
	console.log ("True");
else
	console.log ("False");

let	stop = () => { console.log ("Program stopped..."); }
(a == b) && stop ()

let	o = { x : 1 };
let	p = null;
o && o.x     // => 1: o is truthy, so return value of o.x
p && p.x    // => null: p is falsy, so return it and don't evaluate p.x

/*	
 	LOGICAL OR (||)
 --------------------------------
 The || operator performs the 
 Boolean OR operation on its two 
 operands. If one or both 
 operands is truthy, it returns a 
 truthy value. If both operands 
 are falsy, it returns a falsy
 value.
*/
function copy (p) {
	
	p = p || {};

	return p;
}

let	 cp = null;
cp = copy ("Teste copied");
console.log (cp);
cp = copy ();
console.log (cp);

let	n = (10 > 11) || (20 < 13);
console.log (n);

n = (11 > 10) || false;
console.log (n);

n = false || true
console.log (n);

n = false || false
console.log (n);

/*	LOGICAL NOT (!)
 -----------------------------------
 The ! operator is a unary operator;
 it is placed before a single
 operand. Its purpose is to invert 
 the boolean value of its operand. 
 For example, if x is truthy !x 
 evaluates to false. If x is falsy, 
 then !x is true.
 */

let bool = true;
console.log (!bool);

bool = false;
console.log (!bool);

let	state = 0;

if (!state)
	console.log ("The state was converted");
else
	console.log ("The state wasn't converted");

if (!!state)
	console.log ("The state was converted");
else
	console.log ("The state wasn't converted");
