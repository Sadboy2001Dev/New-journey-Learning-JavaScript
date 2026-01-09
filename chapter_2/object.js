/*
 		OBJECT
 -------------------------------------
 We can define object as some type of
 data colection.
 To create an object we use the
 prefixed keyword "new" before the
 keyword "Object" and an empty object
 is created, an example bellow:
 */
let	obj = new Object (); // or new Object (without parenthesis)
console.log (obj); 

obj['name'] = "Gil"; // added a property-> "name" and its value-> "Gil"
obj.age = 24; // added property age, value 24
console.log (obj); // { name: 'Gil', age: 24 }

/*
 * As you can see there are two ways 
 * to add property in Object
 */

// created a new object and inicialized 
const person = {
	'name':"Kupessa",
	'age': 50,
	'sport': "Basketball",

	info () {
		return `My name is ${person.name} and I'm ${person.age} years old`
	}
}

console.log (person.info ());
