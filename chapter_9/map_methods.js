// Map methods
// set () - used to assign values to map
let myMap = new Map ();

myMap.set ('name', 'Gil');
myMap.set ('Age', 24);
myMap.set ('Status', 'off');

// get () - used to show the value of the key
console.log (myMap.get ('name')); // Gil
console.log (myMap.get ('Status')); // off

// has () - used to determine if the map contains a given key
console.log (myMap.has ('Age'));
console.log (myMap.get ('Age'));

// size property is used to show the size
console.log (myMap.size); // 3

// delete () - used to remove pair keys
myMap.delete ('Status'); // removed: Status : off
console.log (myMap.has ('Status'));

// iterating with Map

for (let [key, value] of myMap)
	console.log (`${key}: ${value}`);

// clear () - used to remove all entries from map
myMap.clear ();
console.log (myMap.size); // 0


/*
 * Transform Map to Object or Map to Array
 * 
 * Object.fromEntries () - convert Map to Object
 *
 * (...) - spread operator, convert Map to array
 *
 */
myMap
	.set ('name', 'Gil')
	.set ('surname', 'Kupessa')
	.set ('age', 24);

let myObj = Object.fromEntries (myMap);
console.log (myObj);

let myArr = [ ...myMap.keys ()];
console.log (myArr);

myArr = [ ...myMap.values ()];
console.log (myArr);
