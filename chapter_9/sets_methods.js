// Set Methods
// add () - used to set values
let mySet = new Set ();
mySet.add (12);
mySet.add (23);
mySet.add (9);
mySet.add (12);

console.log (mySet);

// size property to show the size
console.log (mySet.size) // 3

// has () - used to check if some value is in set
console.log (mySet.has (9)); // true

// delete () - used to remove one value
mySet.delete (12);
console.log (mySet);

// clear () - remove all values inside the set
mySet.clear ();
console.log (mySet);

// array created
let ar = [12, 90, 78, 50, 23, 22, 83, 12, 33, 1];

// using spread operator to assign all values to set
let mySet2 = new Set (ar); // all repeated values was removed

// iterating with Set
for (let value of mySet2)
	console.log (value);
