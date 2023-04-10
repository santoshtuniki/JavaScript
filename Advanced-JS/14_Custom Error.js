// throw -> used to throw error message

function sum( x, y ){
	if( typeof x === "number" && typeof y === "number" ){
		return x + y;
	}
	
	// throw "Only numbers are allowed as arguments"; // Custom Error without a 'message' property. A simple 'String'
	throw new Error ( "Only numbers are allowed as arguments" );	// creating a Error Object. So 'String' becomes the "message" property in error object
}

try{
	console.log( sum( 10, 20 ) );
	console.log( sum( 10, 'hello' ) );
} catch( error ){
	// console.log( error );	// custom errors without a 'message' property
	console.log( error.message );	// custom errors with a 'message' property
}
