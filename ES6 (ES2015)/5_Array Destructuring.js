const days = [
	'Mon',
	'Tue',
	'Wed',
	'Thu',
	'Fri'
];

// Array destructuring and giving default values
const [ first, second, third, fourth, fifth, sixth, seventh = 'Holiday' ] = days;
console.log( first );	// Mon
console.log( second );	// Tue
console.log( third );	// Wed
console.log( fourth );	// Thu
console.log( fifth );	// Fri
console.log( sixth );	// undefined
console.log( seventh );	// Holiday

// To skip 2 items in the array, give 2 'commas' in between
const [a, b, , , c] = days;
console.log(a);		// Mon
console.log(b);		// Tue
console.log(c);		//Fri