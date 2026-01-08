/*
	FUNCTION
 -------------------------
 function is a subprogram
 created to resolve a
 specific issue or to do
 a speficic task
*/

function sum (a, b) {
	return a + b;	// funtion to sum two numbers
}

function subtract (a, b) {
	return a - b;	// function to subtract two numbers
}

/*
 	Calling function
 --------------------------
 When we want to use a
 function, we call it
*/

let result = sum (12, 44); // function sum called
console.log (result);

result = subtract (44, 17); // function subtract called
console.log (result);

/*
  The return keyword is used to
  return a value. Sometimes will
  see console.log () instead of
  return, it's also valid, cause
  console.log will print the
  result.

  The values inside the parentesis
  is called parameters. When a
  function has a parameter, and
  we called the function, a value
  inside has to be passed as it
  seems above.

  When a function has a empty
  parameter, isn't required to
  pass values to it.
 */

//	FUNCTION WITH EMPTY PARAMETER

function greet () {
	return 'Hello, World';
}
console.log (greet ());

function greeting () {
	console.log ('Hi, there');
}
console.log (greeting ()); /*
				Hi, there
				undefined
			    */
/*
To fix that you just have to 
remove the console.log used 
to call the function.
Instead of: console.log (greeting ());
Is only: greeting ();
'Cause you just used the console.log()
inside the function
*/
greeting ();

/*
 	ARROW FUNCTION
 --------------------------------
 JavaScript has a simply way to 
 create a function and it's a 
 Arrow Function. With arrow 
 function isn't necessary use the 
 keyword 'function' and 'return'
 to return a value.
 */
let	divide = (a, b) => a / b ;
console.log ( divide (12, 3));

let isTeenager = (age) => {
	if (age > 11 && age < 18)
		console.log ('Is teeanager');
	else
		console.log ('Isn\'t a teenager');
}
isTeenager (18); // Isn't a teenager
isTeenager (12); // Is a teenager
isTeenager (15); // Is a teenager

let centimeterToMeter = (cm) => cm / 100;
let meter = centimeterToMeter (1);
console.log (meter + ' m'); // 0.01 m

meter = centimeterToMeter (100); 
console.log (meter + ' m'); // 1 m
