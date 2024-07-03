const name = 'John', message = 'Good Morning';
/* 
	const greeting = message + ' ' + name + '!';
	console.log( greeting );	
	// Good Morning John!
*/
const greeting = `${message} ${name}!`;
console.log( greeting );	// Good Morning John!


const john = {
	name: 'John',
	email: 'john@gmail.com',
	age: 32
};

/*
	const strTr = '<tr>' +
		'<td>' + john.name + '</td>' +
		'<td>' + john.email + '</td>' +
		'<td>' + john.age + '</td>' +
	'</tr>';
	console.log( strTr );
	// <tr><td>John</td><td>john@gmail.com</td><td>32</td></tr>
*/

const strTr = `
	<tr>
		<td>${john.name}</td>
		<td>${john.email}</td>
		<td>${john.age}</td>
	</tr>`
console.log( strTr );
/*
	<tr>
			<td>John</td>
			<td>john@gmail.com</td>
			<td>32</td>
	</tr>
*/