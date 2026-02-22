/*
 * Exception handling is accomplished with a try...catch statement. The
 * idea is that you “try” things, and if there were any exceptions, they
 * are “caught.
 *
 * Note that control shifts to the catch block as soon as an error occurs;
 * that is, the if statement that follows the call to validateEmail won’t 
 * execute. You can have as many statements as you wish inside the try
 * block; the first one that results in an error will transfer control to 
 * the catch block. If there are no errors, the catch block is not 
 * executed, and the program continues.
 */

const age = 20;

try {
	if (age < 0) {
		console.error(`Error: age ${age} is negative`);
	} else {
		console.log (`${age}`);
	}
} catch (err) {
	console.error (`Error: ${age.message}`);
}

const err = new Error ('invalid email');

function validateEmail(email) {
	return email.match(/@/) ? email : new Error(`invalid email: ${email}`);
}

const email = null; //"jane@doe.com";

try {
	const validatedEmail = validateEmail(email);
	if(validatedEmail instanceof Error) {
		console.error(`Error: ${validatedEmail.message}`);
	} else {
		console.log(`Valid email: ${validatedEmail}`);
	}
} catch (err) {
	console.error(`Error: ${err.message}`);
}
