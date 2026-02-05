/*
 * The most common way to loop through the elements of an array is with a 
 for loop
 */

/*
 * 	FOR/IN
 * shows the index
 */
console.log ("\nUsing for/in\n");

let a = [4, 3, 2, 1]; // array with 4 elements
for (let index in a) // iterating with each element
	console.log (index); // showing the indexes: 0, 1, 2, 3

console.log ("\nUsing for/of\n");

/*
 * 		FOR/OF
 * shows the elements of the array
 */

for (let element of a) // iterating with each element
	console.log (element); // showing the elements: 4, 3, 2, 1

console.log ("\nUsing a simple for loop\n");

/*
 * FOR
 */
for (let index = 0; index < a.length; index++) {
	console.log (a[index]);
}

a [a.length] = undefined; // added undefined element
a [a.length] = -1; // last element of the array
console.log ();

for (let i = 0; i < a.length; i++) {
	if (a[i] === undefined) continue; // Skip undefined + nonexistent elements
	console.log (a [i]);

}
console.log ();

for (let i = 0; i < a.length; i++) {
	if (!a[i]) continue; // Skip null, undefined, and nonexistent elements
	console.log (a [i]);
}
console.log ();

for (let i = 0; i < a.length; i++) {
	if (!(i in a)) continue ; // Skip nonexistent elements
	console.log (a [i]);
}
console.log ();


