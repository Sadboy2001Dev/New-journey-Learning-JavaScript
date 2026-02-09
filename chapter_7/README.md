<h1>Functions</h1>

<p>A function is a block of JavaScript code that is defined once but may be executed, or invoked, any number of times.</p>

<p>JavaScript functions are parameterized: a function definition may include a list of identifiers, known as parameters, that work as local variables for the body of the function. Function invocations provide values, or arguments, for the function’s parameters. Functions often use their argument
values to compute a return value that becomes the value of the function-invocation expression.</p>

<p>If a function is assigned to the property of an object, it is known as a method of that object. When a function is invoked on or through an object, that object is the invocation context or this value for the function. Functions designed to initialize a newly created object are called <strong>constructors</strong>.</p>

<p>In JavaScript, functions are objects, and they can be manipulated by programs. JavaScript can assign functions to variables and pass them to other functions. Since functions are objects, you can set properties on them, and even invoke methods on them.</p>

<p>JavaScript function definitions can be nested within other functions, and they have access to any variables that are in scope where they are defined. This means that JavaScript functions are closures, and it enables important and powerful programming techniques.</p>

<p>Functions are defined with the function keyword, which can be used in a function definition expression or in a function declaration statement. In either form, function definitions begin with the keyword function followed by these components:</p>
<ul>
    <li>An identifier that names the function. The name is a required part of function declaration statements: it is used as the name of a variable, and the newly defined function object is assigned to the variable. For function definition expressions, the name is optional: if present, the name refers to the function object only within the body of the function itself.</li>
    <li>A pair of parentheses around a comma-separated list of zero or more identifiers. These identifiers are the parameter names for the function, and they behave like ocal variables within the body of the function.</li>
    <li>A pair of curly braces with zero or more JavaScript statements inside. These statements are the body of the function: they are executed whenever the function is invoked.</li>
