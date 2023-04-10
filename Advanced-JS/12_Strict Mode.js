// strict mode( "use strict" ) -> To avoid creating global variables unintentionally by missing 'var'
"use strict";

function bar(){
	y = 1;	// 'var' missing => y is now a global variable
}
bar();
console.log( y );	// 1
// ReferenceError: y is not defined -> because of strict mode

function foo(){
	var x = 1;	// local variable due to "var"
}
foo();
console.log( x );	// ReferenceError: x is not defined