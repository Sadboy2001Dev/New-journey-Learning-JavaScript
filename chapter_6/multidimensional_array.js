/*
 * JavaScript does not support true multidimensional arrays, but you can
 * approximate them with arrays of arrays. To access a value in an array
 * of arrays, simply use the [] operator twice. For example, suppose the
 * variable matrix is an array of arrays of numbers. Every element in l
 * matrix[x] is an array of numbers. To access a particular number within
 * this array, you would write matrix[x][y].
 */

let table = new Array (4); // rows

// creating a column
for (let i = 0; i < table.length; i++) {
	table [i] = new Array (3);
}

for (let row = 0; row < table.length; row++) {
	for (let column = 0; column < table [row].length; column++) {
		if (column === row)
			table [row][column] = row * column;
		else
			table [row][column] = column + 1;
	}
}

for (let i = 0; i < table.length; i++) {
	for (let j = 0; j < table [i].length; j++) {
		console.log (table [i][j]);
	}
}
