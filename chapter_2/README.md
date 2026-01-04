<h1>JavaScript Data types</h1>

<p>
In this chapter II will talk about data types.<br>
JavaScript types can be divided into two categories: primitive types and object types. <br>
The list bellow shows the primitives types and objects types upported by JavaScript (ECMAscript):
</p>

<ul>
<strong>Primitives Types</strong>
    <ol>
        <li>
        Number
            <ul>
                <li>Infinity</li>
                <li>NaN</li>
            </ul>
         </li>
         <li>String</li>
         <li>Boolean</li>
         <li>Null</li>
         <li>Undefined</li>
    </ol></br>
<strong>Objects Types</strong>
    <ol>
        <li>Function</li>
        <li>Object
            <ul><li>Array</li></ul>
        </li>
    </ol>
</ul>

<p>
Any JavaScript value that is not a <strong>number, string, boolean, null and undefined is an object (as array, function, object, class)</strong>.
</p>

<p>
Each data type are going to be approached inside a different file but before lets talk about variables and constante 👍🏾.
</p>

<h2>Variables and Constants</h2>

<p>
The values that can be represented and manipulated are stored in the variables or constants. An example bellow:
</p>

<code>
let age = 12; // variable age declared
const name = "Gil"; // constante name declared
var hours = "12:30 min"; // variable hours declared
let otherNumber = undefined; // variable otherNumber declared
const celcius = 12.89: // constant celcius declared
age = null; // changed age variable value 12 to null
celcius = 32.90 // error constant can't be changed
</code>

Only variables can change its value. A constante value can't be changed,if you try to change the constant value it'll give you a error so be careful.</br>

When we want to declare a variable we use the reserved word <i>let</i> or  <i>var</i>, and for <i>constant</i> as we saw in example above.
