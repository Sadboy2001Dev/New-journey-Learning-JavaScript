/*
 * There are times when the code in a try block involves some sort of
 * resource, such as an HTTP connection or a file. Whether or not there is
 * an error, we want to free this resource so that it’s not permanently
 * tied up by your program. Because the try block can contain as many
 * statements as you want, any one of which can result in an error, it’s
 * not a safe place to free the resource. It’s also not safe to free the
 * resource in the catch block, because then it won’t get freed if there
 * is no error. This is exactly the situation that demands the finally
 * block, which gets called whether or not there is an error.
 * Because we haven’t covered file handling or HTTP connections yet, we’ll
 * simply use an example with console.log statements to demonstrate the
 * finally block:
*/

try {
	console.log("this line is executed...");
	throw new Error("whoops");
	console.log("this line is not...");
} catch(err) {
	console.log("there was an error...");
} finally {
	console.log("...always executed");
	console.log("perform cleanup here");
}

// Same example but without 'throw line'
                                                                          try {
										  console.log("this line is executed...");
	console.log("this line is not...");                               } catch (err) {
		console.log("there was an error...");
} finally {
	console.log("...always executed");
	console.log("perform cleanup here");
}

