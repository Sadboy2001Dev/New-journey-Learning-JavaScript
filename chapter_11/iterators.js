// array called book created

const book = [
"Twinkle, twinkle, little bat!",
 "How I wonder what you're at!",
 "Up above the world you fly,",
 "Like a tea tray in the sky.",
 "Twinkle, twinkle, little bat!",
 "How I wonder what you're at!",
];

// iterator (represented by letter it)
// receive the values of the array book
// to receive the values it's used the method "values ()"
const it = book.values ();

// reading the the pages of the book
// to read is used the method "next ()"
console.log (it.next ());
console.log (it.next ());
console.log (it.next ());
console.log (it.next ());
console.log (it.next ());
console.log (it.next ());
console.log (it.next ());
console.log (it.next ());
console.log (it.next ());

/*
 * next gives us the last page in the book, it tells us we’re not done.
 * This is where the book analogy breaks down a little bit: when you read 
 * the last page of a book, you’re done, right?
 * Iterators can be used for more than books, and knowing when you’re dono
 * is not always so simple.
 * -----
 * When you are done, note that value is undefined, and also note that
 * you can keep calling next, and it’s going to keep telling you the
 * same thing. Once an iterator is done, it’s done, and it shouldn’t ever 
 * go back to providing you data.
 */

/*
 * This way it won't print the unexpected values (undefined)
 */
const It = book.values ();
let current = It.next ();

while (!current.done) {
	console.log (current.value);
	current = It.next ();
}

/*
 * iterators are distinct; that is, every time you create a new iterator,
 * you’re starting at the beginning, and it’s possible to have multiple
 * iterators that are at different places.
 */
const it1 = book.values ();
const it2 = book.values ();

// read two pages with it1:
console.log (it1.next());
console.log (it1.next());

// read one page with it2:
console.log (it2.next());

// read third page with it1:
console.log (it1.next());
