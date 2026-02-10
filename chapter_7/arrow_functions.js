/*
 * Arrow functions is a simplified way to declare a function without the
 * keyword 'function'.
 */

let square = (arg) =>  arg * arg; // arrow function declaration
console.log (square (10)); // 100

let add = (x, y) => x + y;
console.log (add (9, 4));

/*
 * As shown above the return keyword was ommited (only when is short code)
 * and the values inside the parenthesis is the arguments. After the
 * arguments it has a arrow (this is why its called arrow function), and
 * no bracket braced was necessary when is a short code as return keyword.
 */

let bigger = (a) => {
	return a.reduce ((x, y) => {
		return (x > y) ? x : y
	}, 0);
};
console.log (bigger ([12, 0, 9 , 2, 30, 100, 456, 10, 22, 7]));
