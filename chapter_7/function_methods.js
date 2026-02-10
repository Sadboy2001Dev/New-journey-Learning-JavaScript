/*
 *  Since functions are objects, they can have methods, just like any
 *  other object.
 *
 * call () and apply() - allow you to indirectly invoke a function as if
 * it were a method of some other object. The first argument to both
 * call() and apply() is the object on which the function is to be
 * invoked; this argument is the invocation context and becomes the value
 * of the this keyword within the body of the function.
 */

let add = (x, y) => x + y;
let o = { x: 1, y: 2 };

console.log (add.call (o, 1, 2));

/*
 * apply() method is like the call() method, except that the arguments to 
 * be passed to the function are specified as an array.
 */
console.log (add.apply (o, [12, 9]));

/*
 * bind () method - bind a function to an object.
 */

let obj = { name: 'Kupessa' };
function callName() { console.log ('The name is ' + this.name)};
let calledName = callName.bind (obj); // function and object bound

calledName ();

/*
 * toString () method -  return a string that follows the syntax of the
 * function declaration statement.
 */
console.log (add.toString ());

/*
 * name - return the function name
 */

console.log (add.name);
console.log (callName.name);
console.log (calledName.name);

/*
 * length - return the arguments' number
 */
console.log (calledName.length);
console.log (add.length);
console.log (callName.length); 
