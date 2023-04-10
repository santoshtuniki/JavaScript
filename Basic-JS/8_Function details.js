/* since JavaScript is a Scripting language, it is loosely called.
There is no relation between the no. of arguments declared in function
and the no. of arguments passed in the function call */

/* Then the extra parameter we sent in function call 
can't be said to be lost, but can be utilized using 'Argument Object of a Function' */

function foo( x, y, z ){
	console.log( x, y, z );	// x =  hello , y =  world , z =  undefined
	console.log( 'foo is called' );

	console.log( arguments )	// Argument Object
	// [Arguments] { '0': 'hello', '1': 'world', '2': 'Good', '3': 'Morning' }
	console.log( "Length of the arguments = ", arguments.length )
	for( var i = 0; i < arguments.length; i++ ){
		console.log( arguments[i] )
	}
}
foo('hello', 'world', 'Good', 'Morning');	// foo is called


// Utilizing 'Argument Object of a Function'
function sumAll(){
	for( var i = 0, sum = 0; i < arguments.length; i++ ){
		sum += arguments[i];
	}
	return sum;
}

console.log( sumAll(10, 20) );
console.log( sumAll(10, 20, 30) );
console.log( sumAll(10, 20, 30, 40) );

