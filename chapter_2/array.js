/*
		ARRAY
 -----------------------------------
 Array is list of data types as:
 number, strings, function, objects
 even array.
*/

let	my_array = [ 2026, //number 
	"this is the main array", // string
	function sum (a, b) { return a + b }, // function
	{ number: 2025, string: "inside the array" },// object
	["second array inside the first one", 2024] ]; // array

console.log (my_array);

/*	Accessing each data type inside the array
 * To acess the data inside the array, you put the number
 * of index that represent the data in the array.
 *
 * The index 0 is the first data, 1 is the second, 2 is
 * the third index and so on.
 */
console.log (my_array[0]);
console.log (my_array [1]);
console.log (my_array [2]);
console.log (my_array [3]);
console.log (my_array [4]);

// 	ACCESSING VALUE IN THE FUNCTION
let	functionInsideArray = my_array [2](23, 7); //added 23 + 7: 30
console.log (functionInsideArray); // 30

/*
 * As you saw the name of function was omitted and we
 * access first the index where the function is on the
 * array, then, inside brackets we put the argument to
 * be added, and the result is returned and stored by
 *  "functionInsideArray"
 */

// ACCESSING PROPERTY'S VALUES IN OBJECT
console.log (my_array [3]['number']); // 2025
console.log (my_array [3].string) // inside the array

/* 
 * First we access the index where the object is,
 * the we access we're accessing an object.
 */

// 	ACCESSING ARRAY'S VALUES INSIDE ARRAY 
/*
 * To access the array's value inside the other array
 * the rules is the same as we're accessing a single
 * array but with more brackets that represent the
 * index where the value is.
 */

console.log (my_array [4][0]);
console.log (my_array [4][1]);

/*
 * We can also nested the array.
 */
let	arr = [1, [2, 3, [4, 5, 6, [7, 8, 9]]]];

console.log (arr);
console.log (arr [1]);
console.log (arr [1][0]);
console.log (arr [1][2]);
console.log (arr [1][2][2]);
console.log (arr [1][2][3])
console.log (arr [1][2][3][2]);

console.log ("Array nested\v");

for (let i = 0; i < arr.length; i++) {
	if (i == 0)
		console.log (arr [i]);
	for (let j = 0; j < arr[i].length; j++)
	{
		if (j != arr [i].length - 1)
			console.log (arr [i][j]);
		for (let k = 0; k < arr[i][j].length; k++)
		{
			if (k != arr [i][j].length - 1)
				console.log (arr [i][j][k]);
			for (let l = 0; l < arr[i][j][k].length; l++)
				console.log (arr[i][j][k][l]);
		}
	}
}
