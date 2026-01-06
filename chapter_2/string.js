/*
 		STRING
 -------------------------------------
 Strings are JavaScript's type for
 representing text. JavaScript’s 
 strings (and its arrays) use
 zero-based indexing: the first value
 is at position 0, the second at 
 position 1 and so on. String
 have to be in simple or double quotes

*/

let	str = "A simple text";
console.log (str);
for (let i = 0; i <= str.length - 1; i++)
	console.log (str[i]); // print each charactere

let	otherString = 'Roses are Red';
console.log (otherString);

//	STRING LITERAL
console.log (`First text: ${str}\nSecond text: ${otherString}`);

/*
  You can write a string literal across
  multiple lines by ending each line but
  the last with a backslash (\).
  Neither the backslash nor the line
  terminator that follow it are part of 
  the string literal. If you need to 
  include a newline character in a string 
  literal, use the character sequence \n (documented below):
*/

let multline = `Line one\
		line two\
		line three`;
console.log (multline)

//	Scape Sequences

let	sentence = "I'm going to change the line\nThis is a new line scape sequence";
console.log (sentence); // new line -> \n

sentence = "backslash with quote to print \"double quote\" and \'single quote\'";
console.log (sentence);

sentence = 'Trying to see the \v vertical tab';
console.log (sentence);

sentence = 'Now I\'m trying to see the\t horizontal tab';
console.log (sentence);

//	Joing strings
let	firstSentence = 'Hello';
let	secondSentence = 'World';

console.log (firstSentence + ' ' + secondSentence);
console.log ("I" + " " + "joined" + " " + "differents" + " " + "sentences");
