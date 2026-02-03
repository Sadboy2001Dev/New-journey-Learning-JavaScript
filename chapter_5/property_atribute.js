// Property Attributes

let result = Object.getOwnPropertyDescriptor({x:2}, "x");
console.log (result);

let o = {}; // Start with no properties at all

// Add a nonenumerable data property x with value 1.

Object.defineProperty(o, "x", { value : 1,
	writable: true,
	enumerable: false,
	configurable: true});

// Check that the property is there but is nonenumerable

result = o.x; // => 1
console.log (result);
result = Object.keys(o); // => []
console.log (result);

// Now modify the property x so that it is read-only

Object.defineProperty(o, "x", { writable: false });
result = o;
console.log (result);

// Try to change the value of the property

o.x = 2; // Fails silently or throws TypeError in strict mode
console.log (o.x); // => 1

// The property is still configurable, so we can change its
// value like this:

Object.defineProperty(o, "x", { value: 2 });
console.log (o.x);  // => 2

// Now change x from a data property to an accessor property

Object.defineProperty(o, "x", { get: function() { return 0; } });
console.log (o.x); // => 0

// Object.defineProperties () to alter more than one
// property at same time

var p = Object.defineProperties({}, {
	x: { value: 1, writable: true, enumerable:true, configurable:true }, 
	y: { value: 1, writable: true, enumerable:true, configurable:true },
	r: { 
	 get: function() { return Math.sqrt(this.x*this.x + this.y*this.y)
	 },
		enumerable:true,
		configurable:true
	}
});

console.log (p);

/*
 * Add a nonenumerable extend() method to Object.prototype.
 * This method extends the object on which it is called by
 * copying properties from the object passed as its argument.
 * All property attributes are copied, not just the property value.
 * All own properties (even nonenumerable ones) of the argument object
 * are copied unless a property with the same name already exists in
 * the target object.
 */

let obj_heritage =Object.defineProperty(Object.prototype,
 "extend", // Define Object.prototype.extend
	{
		writable: true,
		enumerable: false, // Make it nonenumerable
		configurable: true,
		value: function(o) { // Its value is this function
			// Get all own props, even nonenumerable ones
			var names = Object.getOwnPropertyNames(o);
			// Loop through them
			for(var i = 0; i < names.length; i++) {
				// Skip props already in this object
				if (names[i] in this) continue;
				// Get property description from o
				var desc = Object.getOwnPropertyDescriptor(o,names[i]);
				// Use it to create property on this
				Object.defineProperty(this, names[i], desc);
			}
		}
	});

console.log (obj_heritage);
