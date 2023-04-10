let primes = new Set( [ 2, 3, 5, 7, 11, 13 ] );

console.log( primes.size );		// 6

primes.add( 17 );
console.log( primes );
// Set(7) { 2, 3, 5, 7, 11, 13, 17 }

primes.delete( 5 );
console.log( primes );
// Set(6) { 2, 3, 7, 11, 13, 17 }

console.log( primes.has( 8 ) );		// false
console.log( primes.has( 11 ) );		// true