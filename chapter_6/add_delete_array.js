// Adding and Deleting Array

let a = []; // ampty array created

a[0] = 12; // Added value to index zero
a[2] = 1; // added value to index two

console.log (a[1]); // index one: undefined

a[a[2]] = a[2] + a[0];

console.log (a[1]); // 13

delete a[1]; // element 1 deleted, the delete does not affect array length

console.log (a);
