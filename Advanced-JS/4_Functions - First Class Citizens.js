/* Functions are plain objects in JS and 
hence can be passed one function to another function or can return one function from another */

function foo( callback ){
	var x = 10, y = 20;
	var z = x + y;

	callback();	// bar function called

	function retFn(){
		console.log( 'retFn called' );
	}

	return retFn;	// retFn function returned
}

function bar(){
	console.log( 'bar called' );
}

var resultFn = foo( bar );	// bar function passed to foo function
resultFn();	// resultFn is a function, because it received the return function retFn from foo