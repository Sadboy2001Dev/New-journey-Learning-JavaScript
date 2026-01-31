// Creating obj

let car = {
	"car model": 'Camaro',
	"mark": 'Chevrolet',
	"engine": 'V8',
	'Scape': "Dual"
};

console.log (car);

// Testing properties with "in"
// teste if the property exist

console.log ("car model" in car); // true: car has a property
				  //called car model

				// false: doesn't exist a property
console.log ("car color" in car); // called car color in car object

// Testing properties with "hasOwnProperty

console.log (car.hasOwnProperty ("Scape")); // true

console.log (car.hasOwnProperty ("car color")); // false

// Testing properties with propertyIsEnumerable
console.log (car.propertyIsEnumerable ("engine")); // true
console.log (car.propertyIsEnumerable ("car color")); // false

car["car color"] = "black";
console.log (car.propertyIsEnumerable ("car color")); // true
