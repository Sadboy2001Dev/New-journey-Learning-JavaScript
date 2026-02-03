/*
 *			 Object Methods
 *
 * toString () method - The toString() method takes no arguments;
 * it returns a string that somehow represents the value of the
 * object on which it is invoked.
 */

// Object
let obj = { x: 12, string: "String inside Object" };
// Object converted to string
let string = obj.toString ();

// Array
let a = [123, 90];
// array converted to string
string = a.toString ();

console.log (string);

// Function
function f () { return 12 };
// function converted to string
string = f.toString ();

console.log (string);

// Date
let date = new Date ();
// Date converted to string
string = date.toString ();

console.log (string);

/*
 * toLocaleString () Method: The purpose of this method is
 * to return a localized string representation of the object
 */

/*
 * toJSON () Method and valueOf () Method are some 
 * of the methods such as other methods not mencioned 
 */
