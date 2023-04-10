console.log( Math ); // Object [Math] {}

// random() method -> Returns a pseudorandom number between 0 and 1
console.log( Math.random() );

// min() method -> Returns the smaller of a set of supplied numeric expressions.
// max() method -> Returns the larger of a set of supplied numeric expressions.
// Numeric expressions to be evaluated. Array not accepted
console.log( Math.min( 10, 50, 30, 77, 2, 98 ) );	// 2
console.log( Math.max( 10, 50, 30, 77, 2, 98 ) );	// 98

// to apply 'min' and 'max' to an array
var numbers = [ 10, 50, 30, 700, 2, 98, 1 ];
console.log( Math.min.apply( null, numbers ) );	// 1
console.log( Math.max.apply( null, numbers ) );	// 700

// ceil() method -> Returns the smallest integer greater than or equal to its numeric argument.
console.log( Math.ceil( 3.5 ) );	// 4
console.log( Math.ceil( 3.8 ) );	// 4
console.log( Math.ceil( 3.2 ) );	// 4
console.log( Math.ceil( -3.5 ) );	// -3
console.log( Math.ceil( -3.8 ) );	// -3
console.log( Math.ceil( -3.2 ) );	// -3

// floor() method -> Returns the greatest integer less than or equal to its numeric argument.
console.log( Math.floor( 3.5 ) );	// 3
console.log( Math.floor( 3.8 ) );	// 3
console.log( Math.floor( 3.2 ) );	// 3
console.log( Math.floor( -3.5 ) );	// -4
console.log( Math.floor( -3.8 ) );	// -4
console.log( Math.floor( -3.2 ) );	// -4

// round() method -> Returns a supplied numeric expression rounded to the nearest integer.
console.log( Math.round( 3.5 ) );	// 4
console.log( Math.round( 3.8 ) );	// 4
console.log( Math.round( 3.2 ) );	// 3
console.log( Math.round( -3.5 ) );	// -3
console.log( Math.round( -3.8 ) );	// -4
console.log( Math.round( -3.2 ) );	// -3

// pow() method -> Returns the value of a base expression taken to a specified power.
// pow( x, y ) => x ^ y
console.log( Math.pow( 3, 4 ) );	// 81 = 3 ^ 4

// abs() method -> Returns the absolute value of the number
console.log( Math.abs( -7.9 ) );	// 7.9

// Note
console.log( Math.max() )	// -Infinity
console.log( Math.min() )	// Infinity

var one = Math.max() < Math.min();
var two = Math.max() > Math.min();

console.log( one );	// true
console.log( two );	// false