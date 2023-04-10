/* Internally function declaration is hoisted at the top of the scope,
so even if it is called before the declaration, it works 
	function foo(){	// top of the scope
		console.log( 'foo called' );
	}
*/

/* Whereas function expression is more like a variable hoisting Internally,
so if it is called before the declaration, it gives error 
	var bar;	// variable hoisting
*/

foo();	// foo called
function foo(){	// function declaration
	console.log( 'foo called' );
}
foo();	// foo called

// bar();	// TypeError: bar is not a function
var bar = function(){	// function expression
	console.log( 'bar called' );
};
bar();	// bar called