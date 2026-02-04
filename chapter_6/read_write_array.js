// Reading and Writting Array elements
let a = ["world"]; // Start with a one-element array
console.log (a);
console.log ("size " + a.length);

let value = a[0]; // Read element 0
console.log (value);

a[1] = 3.14; // Write element 1
console.log (a);
console.log ("size " + a.length);

i = 2;
a[i] = 3; // Write element 2
console.log (a);
console.log ("size " + a.length);

a[i + 1] = "hello"; // Write element 3
console.log (a);
console.log ("size " + a.length);

a[a[i]] = a[0]; // Read elements 0 and 2, write element 3
console.log (a);
console.log ("size " + a.length);
