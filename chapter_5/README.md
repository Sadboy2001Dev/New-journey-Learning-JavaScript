<h1>Objects</h1>

An object is an unordered collection of properties, each of which has a name and a value. Property names are strings, so we can say that objects
map strings to values.<br>

JavaScript objects are dynamic—properties can usually be added and deleted but they can be used to simulate the static objects and “structs” of statically typed languages. They can also be used to represent sets of strings.</br>

Any value in JavaScript that is not a string, a number, true, false, null or undefined is an object. And even though strings, numbers, and booleans are not objects, they behave like immutable objects.</br>

The most common things to do with objects are <strong>create them and to set, query, delete, test, and enumerate their properties</strong>. These fundamental operations are described in this chapter.</br>

A property has a name and a value. A property name may be any string,
including the empty string, but no object may have two properties with the same name. The value may be any JavaScript value, or (in ECMAScript 5) it may be a getter or a setter function (or both). In addition to its name
and value, each property has associated values that we’ll call property attributes:</br>

<ul>
    <li>The<i> writable</i> attribute specifies whether the value of the property can be set.</li>
    <li> The <i>enumerable</i> attribute specifies whether the property name is returned by a for/in loop.</li>
    <li>The <i>configurable</i> attribute specifies whether the property can be deleted and whether its attributes can be altered.</li>
</ul>

Prior to ECMAScript 5, all properties in objects created by your code are writable, enumerable, and configurable. In ECMAScript 5, you can configure the attributes of your properties.</br>

In addition to its properties, every object has three associated object attributes:</b>

<ul>
    <li>An object’s <i>prototype</i> is a reference to another object from which properties are inherited.</li>
    <li>An object’s <i>class</i> is a string that categorizes the type of an object.</li>
    <li>An object’s <i>extensible</i> flag specifies (in ECMAScript 5) whether new properties may be added to the object.</li>
</ul>

Finally, here are some terms we’ll use to distinguish among three broad categories of JavaScript objects and two types of properties:<br>

<ul> Categories
    <li>A native object is an object or class of objects defined by the ECMAScript specification. Arrays, functions, dates, and regular expressions (for example) are native objects.</li>
    <li>A host object is an object defined by the host environment (such as a web browser) within which the JavaScript interpreter is embedded. The HTMLElement objects that represent the structure of a web page in client-side JavaScript are host objects. Host objects may also be native objects, as when the host environment defines methods that are normal JavaScript Function objects.</li>
    <li>A user-defined object is any object created by the execution of JavaScript code.</li>
</ul>

<ul>Properties:
    <li>An own property is a property defined directly on an object.</li>
    <li>An inherited property is a property defined by an object’s prototype object.</li>
</ul>
