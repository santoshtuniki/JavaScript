// Map has an "ordering" of key value pairs unlike Objects
// The 'key' can be any datatype in the Map whereas keys in Objects are 'string'/'symbol'

// Map consists of an array of tuples
const numbers = new Map( [ [1, "one"], [2, "two"], [3, "three"] ] );
console.log( numbers );
// Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }

console.log( numbers.size );	// 3

console.log( numbers.entries() );
// [Map Entries] { [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] }

console.log( numbers.keys() );
// [Map Iterator] { 1, 2, 3 }

console.log( numbers.values() );
// [Map Iterator] { 'one', 'two', 'three' }

numbers.set( 40, 'Forty' );
console.log( numbers );
// Map(4) { 1 => 'one', 2 => 'two', 3 => 'three', 40 => 'Forty' }

console.log( numbers.get( 3 ) );	// three

numbers.delete( 2 );
console.log( numbers );
// Map(3) { 1 => 'one', 3 => 'three', 40 => 'Forty' }

for( let item of numbers ){
	console.log( item );
}
/*
	[ 1, 'one' ]
	[ 3, 'three' ]
	[ 40, 'Forty' ]
*/

numbers.clear();
console.log( numbers );		// Map(0) {}