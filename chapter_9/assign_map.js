// created map
let userRoles = new Map ();

// users
const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };
const u5 = { name: 'Kupessa' };

// assign users to map using the set () method
// assign one by one
userRoles.set (u1, 'User');
userRoles.set (u2, 'User');

// assign one group
userRoles
	.set (u3, 'Admin')
	.set (u4, 'User')
	.set (u5, 'Admin');
/*
 * You can also pass an array of arrays to the constructor:
 *
 * const userRoles = new Map([
 * 	[u1, 'User'],
 * 	[u2, 'User'],
 * 	[u3, 'Admin'],
 * ]);
*/

console.log (userRoles);
