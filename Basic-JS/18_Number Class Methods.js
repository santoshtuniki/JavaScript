// Number -> An object that represents a number of any kind

// parseInt() method -> Converts A string to an integer.
// parseInt( string, numberSystem )

console.log( Number.parseInt( "3.56", 10 ) );	// 3
// Here 10 represents decimal number system

console.log( Number.parseInt( "abcdef", 16 ) );	// 11259375
// Here 16 represents hexa number system

/* 
The parseInt() method converts a string to an integer if it is possible. 
If the string starts with a number, it will convert that numeric part and return it. 
Else, it will return NaN. 
*/
console.log( parseInt( "555Hi" ) );		// 555
console.log( parseInt( "Hi555" ) );		// NaN

// parseFloat() method -> Converts a string to a floating-point number.
console.log( Number.parseFloat( "3.56", 10 ) );	// 3.56

// useful for currency values
// toFixed() -> Returns a string representing a number in fixed-point notation.
var wrapNumber = new Number( 3.5678 );
console.log( wrapNumber );
console.log( wrapNumber.toFixed( 2 ) );
console.log( 3.5648.toFixed(3) );

// NaN -> Not a Number
var x = 1 / 'hello';
console.log( x );	// NaN
console.log( NaN );	// NaN
console.log( Number.NaN );	// NaN
console.log( NaN === 1 );	// false
console.log( NaN === NaN );	// false
console.log(typeof(NaN));	// number

console.log( null === null );	// true
console.log( undefined === undefined );	// true

/* 
	isNaN() method -> to check if an expression results in NaN,
	as equality doesn't hold true for NaN 
*/
console.log( ( 1 / 'hello' ) === NaN );	// false
console.log( isNaN( 1 / 'hello' ) );	// true
console.log( Number.isNaN( 1 / 'hello' ) );	// true