// 1. Pass items of an array as arguments into a function
const numbers = [ 10, 45, 32, 78, 33, 19];
console.log( ...numbers );	// 10 45 32 78 33 19
const result = Math.max( ...numbers );
console.log( result );		// 78

// 2. Spread out items of an array into comma-separated values
const arr1 = [ 1, 2, 3], arr2 = [ 4, 5, 6];
const arr3 = [ ...arr1, ...arr2];
console.log( arr3 );	// [ 1, 2, 3, 4, 5, 6 ]
/*
	const arr3 = arr1.concat( arr2 );
	console.log( arr3 );	// [ 1, 2, 3, 4, 5, 6 ]
*/

// 3. Object spread ( Not for ES-2015 but for future )
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

const johnCopy = {	// a shallow copy & not a deep copy
	...john
}

console.log( john );
/*
	{
		name: 'John',
		age: 32,
		email: [ 'john@gmail.com', 'john@yahoo.com' ],
		address: { city: 'Bangalore', pincode: 560100 }
	}
*/

console.log( johnCopy );
/*
	{
		name: 'John',
		age: 32,
		email: [ 'john@gmail.com', 'john@yahoo.com' ],
		address: { city: 'Bangalore', pincode: 560100 }
	}
*/

/*
	shallow copy - 
	The Primitive dataTypes ( string, number, boolean ) are copied by value.
	While the Object dataTypes ( array, objects ) are copied by reference
*/

// primitive value change
johnCopy.name = 'Johnny';

// non-primitive value change
johnCopy.email.push('john@xyz.com');

console.log( john );
/*
	{
		name: 'John',
		age: 32,
		email: [ 'john@gmail.com', 'john@yahoo.com', 'john@xyz.com' ],
		address: { city: 'Bangalore', pincode: 560100 }
	}
*/

console.log( johnCopy );
/*
	{
		name: 'Johnny',
		age: 32,
		email: [ 'john@gmail.com', 'john@yahoo.com', 'john@xyz.com' ],
		address: { city: 'Bangalore', pincode: 560100 }
	}
*/