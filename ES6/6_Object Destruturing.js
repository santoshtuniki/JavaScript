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

/*
	we create variables based on the 'properties' of the object
	const { property } = object;

	we can assign new name to variables other than property as
	const { property: newName } = object;
*/

// const name = john.name;
const { name, age: yearsOld } = john;
console.log( name, yearsOld );	// John 32
// console.log( age );		// ReferenceError: age is not defined

const { address } = john;
console.log( address );	// { city: 'Bangalore', pincode: 560100 }

// Since 'address' is an object, use Object Destructuring to get 'city'
const { address: { city: residence } } = john;
console.log( residence );	// Bangalore

// Since 'email' is an array, use Array Destructuring to get 'primary' email
const { email: [ primary, secondary] } = john;
console.log( primary );		// john@gmail.com
console.log( secondary );	// john@yahoo.com