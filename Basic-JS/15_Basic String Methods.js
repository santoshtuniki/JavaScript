// string is immutable
var quote = "With great power comes great responsibility";

// substring() method -> to get part of the string
/* 
	substring( Starting Index, Ending Index ) 
	Starting index included but the Ending index excluded
*/
var pieceOfCode = quote.substring( 10, 20 );	// form index 10 to 19
console.log( pieceOfCode );	//  power com

pieceOfCode = quote.substring( 10 );	// form index 10 to end
console.log( pieceOfCode );	//  power comes great responsibility

// replace() method -> to replace part of the string with new words
// replace( original, new)
var replacedString = quote.replace( 'responsibility', 'electricity bills' );
console.log( replacedString );	// With great power comes great electricity bills
console.log( quote );			// With great power comes great responsibility

// split() method -> splits the string at a particular character and results in an array
var fruits = 'banana,mango,apple';
var fruitsArray = fruits.split( ',' );
console.log( fruitsArray );	// [ 'banana', 'mango', 'apple' ]

// indexOf() method -> gives index of first occurence in the string, -1 if not present in string
var firstIndex = quote.indexOf( 'great' );
console.log( firstIndex );	// 5

// lastIndexOf() method -> gives index of last occurence in the string, -1 if not present in string
var lastIndex = quote.lastIndexOf( 'great' );
console.log( lastIndex );	// 23

lastIndex = quote.lastIndexOf( 'greatest' );
console.log( lastIndex );	// -1