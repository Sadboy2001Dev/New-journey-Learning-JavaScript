/*
 * Object serialization is the process of converting an
 * object’s state to a string from which it can later be restored.
 * ECMAScript 5 provides native functions JSON.stringify() and
 * JSON.parse() to serialize and restore JavaScript objects.
 * These functions use the JSON data interchange format.
 * JSON stands for “JavaScript Object Notation,” and its syntax
 * is very similar to that of JavaScript object and array literals.
 */
// object
let obj = { x:12, y: "name", z: true, f: () => { return `An function` }};
console.log (obj);
// converted object to JSON 
let objToJson = JSON.stringify (obj);
console.log (objToJson);
// converted JSON to object
let jsonToObj = JSON.parse (objToJson);
console.log (jsonToObj);
