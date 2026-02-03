/*
 * isPrototypeOf () - determine whether one object is the prototype of 
 r another object
 */

let p = {x:12, y:0};
let o = Object.create (p);
let isMyPrototype = p.isPrototypeOf (o);

console.log (isMyPrototype);

isMyPrototype = Object.prototype.isPrototypeOf (o);
console.log (isMyPrototype);

/* 
 * An object’s class attribute is a string that provides
 * information about/* the type of the
 * object.
 */

/*classof(null); // => "Null"
classof(1); // => "Number"
classof(""); // => "String"
classof(false); // => "Boolean"
classof({}); // => "Object"
classof([]); // => "Array"
classof(/./); // => "Regexp"
classof(new Date()); // => "Date"
classof(window); // => "Window" (a client-side host object)
function f() {}; // Define a custom constructor
classof(new f()); // => "Object"
*/

/*
 * The extensible attribute of an object specifies whether new properties
 * can be added to the object or not.
 * The purpose of the extensible attribute is to be able to “lock down”
 * objects into a known state and prevent outside tampering.
 * The extensible object attribute is often used in 
 * conjunction with the configurable and writable property attributes,
 * and ECMAScript 5 defines functions that make it easy to set these
 * attributes together.
 * Object.seal() works like Object.preventExtensions(), but in addition
 * to making the object nonextensible, it also makes all of the own 
 * properties of that object nonconfigurable. This means that new 
 * properties cannot be added to the object, and existing properties 
 * cannot be deleted or configured. Existing properties that are writable
 * can still be set, however. There is no way to unseal a sealed object.
 * You can use Object.isSealed() to determine whether an object is sealed.
 * Object.freeze() locks objects down even more tightly. In addition to 
 * making the object nonextensible and its properties nonconfigurable, 
 * it also makes all of the object’s own data properties read-only. 
 * (If the object has accessor properties with setter methods,
 * these are not affected and can still be invoked by assignment to 
 * the property.) Use Object.isFrozen() to determine if an object is 
 * frozen.
 * It is important to understand that Object.seal() 
 * and Object.freeze() affect only the object they are passed: they 
 * have no effect on the prototype of that object. If you want to 
 * thoroughly lock down an object, you probably need to seal or 
 * freeze the objects in the prototype chain as well.
 * Object.preventExtensions(), Object.seal(), and Object.freeze()
 * all return the object that they are passed, which means that
 * you can use them in nested function invocations.
 */

// Create a sealed object with a frozen prototype
// and a nonenumerable property
var ob = Object.seal(Object.create(Object.freeze({ x:1 }),
	{ y: { value: 2, writable: true } }));
console.log (ob);
