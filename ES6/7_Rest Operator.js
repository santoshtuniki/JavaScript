// 1. When declaring function's arguments.
/* 
	The rest parameter takes remaining arguments into an array
	If we give any parameter after the 'rest', it gives an error 
	"SyntaxError: Rest parameter must be last formal parameter"
*/
 function foo( x, y, ...others ) {
	console.log( x );		// 14
	console.log( y );		// 78
	console.log( others );	// [ 45, 10, 67 ]
}
foo(14, 78, 45, 10, 67);

function sort( ...numbers ){
	console.log( numbers );		// [ 14, 78, 45, 10, 67 ]
	return numbers.sort();		// using Array.sort() to sort the numbers
}
const result = sort(14, 78, 45, 10, 67);
console.log( result );		// [ 10, 14, 45, 67, 78 ]


// 2. When array destructuring
const days = [
	'Mon',
	'Tue',
	'Wed',
	'Thu',
	'Fri'
];

const [ first, second, ...restOfDays ] = days;
console.log( first, second );	// Mon, Tue
console.log( restOfDays );		// [ 'Wed', 'Thu', 'Fri' ]


// 3. When object destructuring
const john = {
	name: 'John',
	age: 32,
	email: [
		'john@gmail.com',
		'john@yahoo.com'
	],
	address: {
		city: 'Bangalore',
		pincode: 560100
	}
};

const { name, age, ...otherDetailsOfJohn } = john;
console.log( name, age);		// John 32
console.log( otherDetailsOfJohn );
/*
	{
		email: [ 'john@gmail.com', 'john@yahoo.com' ],
		address: { city: 'Bangalore', pincode: 560100 }
	}
	if any property of object say 'city' in 'address' is touched, 
	then it is not included in the rest operator
*/