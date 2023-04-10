// Immediately Invoked Function Expression (IIFE)
/* 
IIFE --> Enclose entire code in anonymous function, then enclose anonymous function parenthesis '()', 
finally add '();' at the end of parenthesis ')' to represent a function call 
*/

// IIFE are special type of function which runs soon after its definition

(function( global ){
	// console.log(global);

	const sum = function( x, y, callBack ){
		var result =  x + y;
		callBack( result );
	};

	sum( 10, 20, function( result ){
		console.log( result );
	});
	
})( window );	// or '}());'

// 'window' is a global variable that works only in a browser

/*
function wrapper(){
	const sum = function( x, y, callBack ){
		var result =  x + y;
		callBack( result );
	};

	sum( 10, 20, function( result ){
		console.log( result );
	});
}
wrapper(); 
*/

/* To minimize the use of 'Global' variables, 
wrap the code in a function i.e wrapper(), or utilize IIFE*/
