// Error object
// creating a instance of Error
const err = new Error ('Invalid email');

// function to validate an email
function validateEmail (email) {
	return email.match (/@/) ? email : new Error (`Invalid email: ${email}`);
}

// created an email
const email = 'carloskupessa50@gmail.com';

const validatedEmail = validateEmail (email);

// checking if an instanceof error was returned
if (validatedEmail instanceof Error) {
	console.error (`Error: ${validatedEmail.message}`);
} else {
	console.log (`Valid email: ${validatedEmail}`);
}
