/*
	setTimeout() is actually a request made to the browser to execute the function,
	after a delay. It is a non-blocking function, the moment it's called, it's going to return.
	The browser gets the result of 30 after 2 sec, but not the function.
	Hence the value is 'undefined'

	const sum = ( x, y ) => {
		setTimeout( () => {
			return x + y;
		}, 2000);
	}
	console.log( sum( 10, 20 ) );	// undefined
*/

const sum = ( x, y, cb ) => {
	setTimeout( () => {
		cb( x + y );
	}, 2000);
}

// Christmas Tree Problem (or) Pyramids of Deaths
console.log( sum( 10, 20, function( result ){

	console.log( result );

	sum( result, 30, function( result ){
		console.log( result );
	} );

} ) );
/*
	undefined
	30
	60
*/