// since functions are also objects, they can also have properies and methods

function greet( message, name ){
	console.log( this );
	console.log( message + ' ' + name + "!");
}
greet( 'Good Morning', 'John' );

console.log( greet instanceof Object );	// true

greet.x = 100;
console.log( greet.x );	// 100
console.log( greet );	// [Function: greet] { x: 100 }

greet.foo = function(){
	console.log( 'foo called' );
};
greet.foo();	// foo called
console.log( greet );	// [Function: greet] { x: 100, foo: [Function (anonymous)] }