// when the arguments passed are less than required, then default value are used
function greeting( message = 'Hello', name = 'World' ){
	return `${message} ${name}!`;
}

console.log( greeting( 'Good Morning', 'John' ) );
// Good Morning John!

console.log( greeting( 'Good Morning' ) );
// Good Morning World!

console.log( greeting() );
// Hello World!

console.log( greeting( undefined, 'John' ) );
// Hello John!