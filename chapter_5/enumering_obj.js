// Enumering Properties

let obj = { x:1, y:2, z:3 }; // enumerated obj

console.log (obj.propertyIsEnumerable ("toString")); //false

for (let p in obj) // interating with all properties
	console.log (p); // x, y, z
