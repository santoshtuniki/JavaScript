// var allows redeclaration of variables of same name.
// global - scope & function - scope are only applicable for 'ver'
var y = 1;
console.log( y );	// 1
var y = 2;
console.log( y );	// 2

// let prevents re-declaration & has block - scoping
let x = 1;
console.log( x );	// 1
/*
	let x = 2;	// SyntaxError: Identifier 'x' has already been declared
	console.log( x );
*/

/*
	let y = 1;	// SyntaxError: Identifier 'y' has already been declared
	This is since in above var conditions variable with name y is already declared in line 4
*/

/* 
	once declared with let, it cannot be redeclared with var and vice-versa.
	This means when we declare with let say let x; 
	This means this is the first decalartion of variable with name 'x' in whole code.
*/

// let scoping
if( true ){
	var y = 1;	// global variable
	let z = 2;	// block scoped
}
console.log( y );	// 1
// console.log( z );	// ReferenceError: z is not defined

// let is not hoisted
// console.log( n );	// ReferenceError: Cannot access 'n' before initialization
let n = 1;	// value is assigned to variable here only
console.log( n );	// 1

console.log( m );	// undefined
var m = 1;	// value is assigned to variable here only
console.log( m );	// 1

// (In Browser) properties not created for window object even if 'let' is a global object
/*
	console.log( window.m );	// 1
	console.log( window.n );	// undefined
*/

let p;
console.log( p );	// undefined