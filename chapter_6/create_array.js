// creating array
let a = []; // An empty array
let ar = [1, 2, 3]; // An array with 3 elements
let array = [1, 12.99, false, "I am an element of an array"]; // An array of varous types

console.log (a); // []
console.log (ar); // [1, 2, 3]
console.log (array); // [1, 12.99, false, 'I am an element of an array']

// creating array with the constructor Array ()
let newArray = new Array (); // An empty array created

console.log (newArray); // []

let newArray2 = new Array (10); // An empty array with length 10

console.log (newArray2);
console.log (newArray2.length); // 10

let newArray3 = new Array (4, 3, 2, 1, "I'm not empty", "testing"); // An array with varios elements

console.log (newArray3); // [4, 3, 2, 1, "I'm not empty", 'testing']
