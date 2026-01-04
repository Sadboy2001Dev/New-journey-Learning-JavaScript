<h1> Lexical Structure </h1>

The lexical structure of a programming language is the set of elementary rules that specifies how you write programs in that language. It is the lowest-level syntax of a language; it specifies such things as what variable names look like, the delimiter characters for comments, and how one program statement is separated from the next. This short chapter documents the lexical structure of JavaScript.</br>

<h2>Comment</h2>

JavaScript supports two styles of comments. The // (comment for one line only) and the /* and\*/(for multiple lines, any text between the characters \/* and \*/ is treated as a comment and JavaScript ignore it). </br>

<h2>Case Sensive</h2>

JavaScript is a case-sensitive language. This means that language keywords, variables, function names, and other identifiers must always be typed with a consistent capitalization of letters<br>
For exemple the variable name is different from Name or NAME for JavaScript, and be alert to not use <i>"Reserved word"</i> in your variable or constant name(s)<br>

<h2>Identifier and Reserved Word</h2>

An identifier is simply a name. In JavaScript, identifiers are used to name variables and functions and to provide labels for certain loops in JavaScript code. A JavaScript identifier must begin with <i> a letter, an underscore (_), or a dollar sign ($)</i>. Subsequent characters can be letters, digits, underscores, or dollar signs. (Digits are not allowed as the
first character so that JavaScript can easily distinguish identifiers from numbers). <br>
<code>
// All valid identifiers

var_name
_varName
_var_name
v8
$dollar
varName
VarName5

</code>
<br>

JavaScript reserves a number of identifiers as the keywords of the language itself. You cannot use these words as identifiers in your programs:
<code>
break
delete
function
return
typeof
case
do
if
switch
var
catch
else
in
this
void
continue
false
instanceof
throw
while
debugger
finally
new
true
with
default
for
then
let
const
class
</code>
<br>

<h2>Semicolon</h2>

Many programming languages uses a Semicolon and most of all are required, but use semicolon on JavaScript is optional, but the semicolon makes the meaning of your code clear. I personally don't like to use a semicolon 😅 but in this journey I'm going to used it, to make my code readable and clear😎.<br>

<code>
// Some examples

let a = 2;
const name = "Kupessa";
var b // it is also valid
a++;
b += ++a;
console.log (b);

</code>
