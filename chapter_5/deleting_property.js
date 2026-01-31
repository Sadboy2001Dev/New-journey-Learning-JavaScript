// Querying Properties
var book = {
	"main title": "New Journey", // Property names include spaces,
	'sub-title': "JavaScript", // and hyphens, so use string literals
	"for": "all audiences", // for is a reserved word, so quote
	author: { // The value of this property is
		firstname: "Hermenegildo", // itself an object. Note that
		surname: "Kupessa" // these property names are unquoted.
	}
};

var author = book.author; // Get the "author" property of the book.
console.log (author);

var name = author.surname // Get the "surname" property of the author.
console.log (name);

var title = book["main title"] // Get the "main title" property of the book.
console.log (title);

book.edition = 6; // Create an "edition" property of book.
console.log (book.edition);

book["main title"] = "ECMAScript"; // Set the "main title" property.
console.log (book["main title"]);

// Deleting Properties
console.log ("\nBefore\n");
for (let prop in book)
	console.log (prop);

console.log ("\nAfter\n");

delete book["main title"];
for (prop in book)
	console.log (prop);
