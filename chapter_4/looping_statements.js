/*
		LOOPING STATEMENTS
  -------------------------------------------
  The looping statements are those that bend
  that path back upon itself to repeat
  portions of your code. JavaScript has four
  looping statements: while, do/while, for, 
  and for/in. One common use for loops is to 
  iterate over the elements of an array.
*/

/*
 	while statement
----------------------------------
The while statement is JavaScript’s
basic loop. It has the following
syntax:

 while (expression)
 	statement
*/

let counter = 0;
while (counter <= 10)
{
	console.log (counter);
	counter++;
}

/*
 	do/while statement
 --------------------------------------
 The do/while loop is like a while loop, 
 except that the loop expression is
 tested at the bottom of the loop rather 
 than at the top. This means that the 
 body of the loop is always executed at 
 least once. The syntax is:
   do
 	statement
   while (expression);

 */

function printArray (a) {
	let len = a.length;
	let i = 0;

	if (!len)
		console.log ("Empty Array");
	else {
		do {
			console.log (a [i]);
			i++;
		} while (i < len);
	}
}

let array = ["Kupessa", "Carlos", "Gil", "Hermen"];
printArray (array);
/*
	for statement
-------------------------------
The for statement provides a 
looping construct that is often 
more convenient than the while 
statement. 

The for statement simplifies 
loops that follow a common 
pattern. Most loops have a 
counter variable of some kind.
This variable is initialized 
before the loop starts and is 
tested before each iteration of 
the loop. Finally, the counter 
variable is incremented or 
otherwise updated at the end of 
the loop body, just before the 
variable is tested again. In 
this kind of loop, the 
initialization, the test, and 
the update are the three crucial 
manipulations of a loop variable. 

The for statement encodes each of
these three manipulations as an 
expression and makes those 
expressions an explicit part of 
the loop syntax:

   for(initialize ; test ; increment)
		 statement
*/

for (let counter = 0; counter <= 10; counter++)
	console.log (counter);

for (let i = 0, j = 10; i < 10; i++, j--)
	console.log (i * j);

for (let i = 0; i < array.length; i++)
	console.log (array [i]);

console.log ("--------------------");
/*
	for/in statement
-------------------------------
The for/in statement uses the 
for keyword, but it is a 
completely different kind of 
loop than the regular for loop. 
A for/in loop looks like this:

  for (variable in object)
	 statement

*/
for (let index in array)
	console.log (array[index]);

let	o = {
	n: 129,
	str: "A object data type",
};

for (let prop in o)
	console.log (o[prop]);
