// Creating Object

// Object.create ()
let o = Object.create ({name:"Kupessa", age: 57}); // created object
// and setted properties to it (name and age)
console.log (o);

// new Object ()
let ob = new Object (); // an empty object created
console.log (ob);

let a = new Array ();
console.log (a);

let d = new Date ();
console.log (d);

let r = new RegExp ("js");
console.log (r);

// Object literals
let empty = {}; // empty object created
console.log (empty);

let filled = { x: 0, y: 2 }; // two properties
console.log (filled);

let filled2 = { x: filled.x, y: filled.y+1 }; // More conplex values
console.log (filled2);

let book = { 
	"main title": "New Journey", // Property names include spaces,
	'sub-title': "Learning JavaScript", // and hyphens, so use string literals
	"for": "all audiences", // for is a reserved word, so quote
	author: { 	// The value of this property is
			firstname: "Hermenegildo", // itself an object. Note that
			surname: "Kupessa" // these property names are unquoted.
		}
	};
console.log (book);
