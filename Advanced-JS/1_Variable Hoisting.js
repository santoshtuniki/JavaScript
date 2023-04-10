/* varable is hoisted before only. Declaration is done at top of the scope
	var x; // variable is declared 
But if the value is not assigned anywhere within the scope and we try to use it,
it gives error
*/

// console.log( y );	// ReferenceError: y is not defined
console.log( x );	// undefined
var x = 1;	// value is assigned to variable here only
console.log( x );	// 1