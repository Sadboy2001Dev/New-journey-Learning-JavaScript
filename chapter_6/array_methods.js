// Array Methods

// push () - add element in the last index of the array
let a = []; // empty array
a.push (2); // 2 added
console.log (a); // [2]

a.push (0); // 0 added 
a.push (2); // 2 added to array
a.push (13); // 13 added to array
console.log (a); // [2, 0, 2, 13]

// pop () - remove the last element in the array
a.pop (); // 13 removed
console.log (a) // [2, 0, 2]

a.pop (); // 2 removed
console.log (a); // [2, 0]
// unshift () - add element in the first index of the array
a.unshift (20); // 20 added: [20, 2, 0]
a.unshift (12, 90); // 12 and 90 added: [12, 90, 20, 2, 0]
console.log (a); 

// shift () - remove the first element in the array
a.shift (); // 12 removed
console.log (a); // [90, 20, 2, 0]

a.shift (); // 90 removed
console.log (a); // [20, 2, 0]

/*
 * join () - converts all the elements of an array to strings
 * and concatenates them, returning the resulting string
 */
let arrayJoined = a.join ();
console.log (arrayJoined); // 20,2,0

arrayJoined = a.join (" "); // the space replace the comma
console.log (arrayJoined); // 20 2 0

arrayJoined = a.join (". "); // the dot replace the space
console.log (arrayJoined); // 20. 2. 0

arrayJoined = a.join (" ' ");
console.log (arrayJoined); // 20 ' 2 ' 0

arrayJoined = a.join (""); // no space, comma, or other separator
console.log (arrayJoined); // 2020

/*
 * reverse () - reverses the order of the elements of an array and return
 * the reversed array
 */

a.push (9, 8);
a.unshift (1, 3, 4);
console.log (a); // [1, 3, 4, 20, 2, 0, 9, 8]

let reversedArray = a.reverse ();
console.log (reversedArray); // [8,9,0,2,20,4,3,1]

/*
 * sort () - sorts the elements of an array in place and returns the
 * sorted array
 */

let items = ["Tv", "Computer", "Mouse"];
let itemSorted = items.sort ();
console.log (itemSorted);

itemSorted = a.sort (function(x, y) { return x - y }); //ascendent order
console.log (itemSorted);

itemSorted = a.sort (function (a, b) { return b - a }); // descendent order
console.log (itemSorted);


a = ['ant', 'cat', 'Dog', 'Bug'];
a.sort(); // case-sensitive sort: ['Bug','Dog','ant',cat']
a.sort(function(s,t) { // Case-insensitive sort
	let a = s.toLowerCase();
	let b = t.toLowerCase();
	if (a < b) return -1;
	if (a > b) return 1;
	return 0;
}); // => ['ant','Bug','cat','Dog']
console.log (a);

/*
 * concat () - method creates and returns a new array that contains
 * the elements of the original array on which concat() was invoked,
 * followed by each of the arguments to concat()
 */

a = [1, 2, 3];
let ar = a.concat(4, 5) // Returns [1,2,3,4,5]
console.log (ar);

ar = a.concat([4,5]); // Returns [1,2,3,4,5]
console.log (ar);

ar = a.concat([4,5],[6,7]) // Returns [1,2,3,4,5,6,7]
console.log (ar);

ar = a.concat(4, [5,[6,7]]) // Returns [1,2,3,4,5,[6,7]]
console.log (ar);

/*
 * slice () - returns a slice, or subarray, of the specified array.
 * Its two arguments specify the start and end of the slice to be
 * returned. The returned array contains the element specified by the
 * first argument and all subsequent elements up to, but not including,
 * the element specified by the second argument. If only one argument is
 * specified, the returned array contains all elements from the start
 * position to the end of the array. If either argument is negative, it
 * specifies an array element relative to the last element in the array.
 * An argument of -1, for example, specifies the last element in the
 * arra, and an argument of -3 specifies the third from last element of
 * the array.
 */

a = [1, 2, 3, 4, 5];
ar = a.slice (0, 3);
console.log (ar); // [1, 2, 3]

ar = a.slice (3);
console.log (ar); // [4, 5]

ar = a.slice (1, -1);
console.log (ar); // [2, 3, 4]

ar = a.slice (-1);
console.log (ar); // [5]

ar = a.slice (-3, -2);
console.log (ar); // [3]


/*
 * splice () - is a general-purpose method for inserting or removing
 * elements from an array.
 * The first argument to splice() specifies the array position at which
 * the insertion and/or deletion is to begin.
 * The second argument specifies the number of elements that should be
 * deleted from (spliced out of the array. If this second argument is
 * omitted, all array elements from the start element to the end of the
 * array are removed. splice() returns an array of the deleted elements,
 * or an empty array if no elements were deleted 
 */
console.log (a);

ar = a.splice (0, 2);
console.log ("Original array: " + a); // [3,4,5]
console.log ("Result spliced: " + ar); // [1,2]

ar = ar.concat (a.splice (1, 3)); // 4 and 5: now -> [1,2,4,5]
console.log ("Result spliced: " + ar); // [1,2,4,5]
console.log ("Original array: " + a); // [3]

/*
 * The first two arguments to splice() specify which array elements are
 * to be deleted.
 * These arguments may be followed by any number of additional arguments
 * that specify elements to be inserted into the array, starting at the
 * position specified by the first argument. Splice inserts arrays
 * themselves, not the elements of those arrays.
 */

a = [1,2,3,4,5,6,7,8];

ar = a.splice (2, 0, 'a', 'b');
console.log ("Original array: " + a);
console.log ("Returned: " + ar);

ar = a.splice (2, 3, [0, 1], 2);
console.log ("Original array: " + a);
console.log ("Returned: " + ar);

/*
 * toString () - this method converts each of its elements to a string
 * (calling the toString() methods of its elements, if necessary) and
 * outputs a comma-separated list of those strings. Note that the output
 * does not include square brackets or any other sort of delimiter around 
 * the array value.
 */

let string = a.toString ();
console.log (string);

string = ['a', 'b', 'c'].toString ();
console.log (string);

string = [1, 2, [3, 4], 5].toString ();
console.log (string);

/*
 * toLocaleString () - is the localized version of toString(). It converts
 * each array element to a string by calling the toLocaleString() method
 * of the element, and then it concatenates the resulting strings using a
 * locale-specific (and implementation-defined) separator string.
 */
let date = new Date ();
date = date.toLocaleString ('pt-BR');
console.log (date);

date = date.toLocaleString ('en-US');
console.log (date);

/*
 * forEach () - method iterates through an array, invoking a function you 
 * specify for each element. As described above, you pass the function as 
 * the first argument to forEach(). forEach() then invokes your function
 * with three arguments: the value of the array element, the index of the 
 * array element, and the array itself.
 * If you only care about the value of the array element, you can write
 * a function with only one parameter—the additional arguments will be 
 * ignored.
 */
let sum = 0;
a.forEach (function (value) { sum += value } );
console.log (sum);

a.splice (2, 1);
console.log (a);
a.forEach (function (value, index, array) { array [index] = value * 2; });
console.log (a);

/*
 * map () - method passes each element of the array on which it is invoked
 * to the function you specify, and returns an array containing the values
 * returned by that function.
 */
a = [1, 2, 3];
a = a.map (function (x) { return x * x});
console.log (a);

/*
 * filter () - method returns an array containing a subset of the elements
 * of the array on which it is invoked. The function you pass to it should
 * be predicate: a function that returns true or false. The predicate is
 * invoked just as for forEach() and map(). If the return value is true,
 * or a value that converts to true, then the element passed to the
 * predicate is a member of the subset and is added to the array that
 * will become the return value.
 */
a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function(x) { return x < 3 }); 
console.log (smallvalues); // [2, 1]

everyother = a.filter(function(x,i) { return i%2==0 });
console.log (everyother); // [5, 3, 1]

/*
 * every () - method is like the mathematical “for all” quantifier ∀: it
 * returns true if and only if your predicate function returns true for
 * all elements in the array.
 */
console.log (a.every(function(x) { return x < 10; })); // => true: all values < 10.
console.log (a.every(function(x) { return x % 2 === 0; })); // => false: not all values even.

/*
 * some () - is like the mathematical “there exists” quantifier ∃: it
 * returns true if there exists at least one element in the array for
 * which the predicate returns true, and returns false if and only if
 * the predicate returns false for all elements of the array.
 */
console.log (a.some(function(x) { return x < 10 }));
console.log (a.some(function(x) { return x % 2 === 0 }));
console.log (a.some (function (x) { return x > 10 }));

/*
 * reduce () and reduceRight () - methods combine the elements of an
 * array, using the function you specify, to produce a single value.
 * reduce() takes two arguments, the first is the function that performs
 * the reduction operation. The task of this reduction function is to
 * somehow combine or reduce two values into a single value, and to
 * return that reduced value. The second argument is an initial value to
 * pass to the function.
 */

sum = a.reduce (function (x, y) { return x + y }, 0);
let max = a.reduce (function (x, y) { return (x > y) ? x : y; }, -2);

console.log (sum);
console.log (max);

/*
 * reduceRight () - works just like reduce(), except that it processes
 * the array from highest index to lowest (right-to-left), rather than
 * from lowest to highest.
 * You might want to do this if the reduction operation has
 * right-to-left precedence.
 */

let min = a.reduceRight (function (x, y) { return (x < y) ? x : y; }, 0);
let big = [1, 2, 3].reduceRight(function(accumulator,value) {
	return Math.pow(value,accumulator);
});

console.log (min);
console.log (big);

/*
 * indexOf () and lastIndexOf () search an array for an element with a
 * specified value, and return the index of the first such element found,
 * or –1 if none is found.
 * indexOf() searches the array from beginning to end.
 * lastIndexOf() searches from end to beginning.
 */
fruits = ['banana', 'mango', 'coconut', 'orange', 'pineapple', 'orange'];
let search = fruits.indexOf ('banana');
console.log (search); // 0

search = fruits.indexOf ('orange');
console.log (search); // 3

search = fruits.lastIndexOf ('orange');
console.log (search); // 5
