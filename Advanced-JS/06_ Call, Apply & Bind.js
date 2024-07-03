// Functions have 3 main in-built methods namely: call, apply & bind

function greet( message, name ){
	console.log( this );
	console.log( message + ' ' + name + "!");
}
// greet( 'Good Morning', 'John' );

greet.x = 100;
greet.foo = function(){
	console.log( 'foo called' );
};

/* call() -> can be used to change context of the function to our choice
Anything passed after 1st argument is taken as passing for the parameter */
greet.call( 'hello', 'Good Morning', 'Mary' );
/* 
	[String: 'hello']
	Good Morning Mary!
*/

// apply() -> same as call() but used when the passing parameters are in Array
var args = [ 'Good Morning', 'Jessy' ];
greet.call( 'hello', args );
/* 
	[String: 'hello']
	Good Morning,Jessy undefined!
*/

greet.apply( 'hello', args );
/* 
	[String: 'hello']
	Good Morning Jessy!
*/
// greet.apply( null, args );	// context remains the same

/* bind() -> For a given function, creates a bound function 
that has the same body as the original function */
var greetBound = greet.bind( 'world' );
greetBound( 'Good Morning', 'Jerry' );
/*
	[String: 'world']
	Good Morning Jerry!
*/

var greetHola = greet.bind( 'world', 'Hola' );	// Fixing first argument i.e 'message' as "Hola"
greetHola();
/*
	[String: 'world']
	Hola undefined!
*/
greetHola( 'James' );
/*
	[String: 'world']
	Hola James!
*/