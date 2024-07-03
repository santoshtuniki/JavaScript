// undefined => default value for variables
var x;
console.log( x );	// undefined
console.log( undefined );	// undefined
console.log( typeof undefined);	// undefined

// null
var y = null;
console.log( y );	// null
console.log( typeof null);	// object

// objects in js
var obj = {
	x:1
};
console.log( obj );		// { x: 1 }
console.log( obj.x );	// 1

obj = null;		// This means the variable is ready for "garbage collection"
console.log( obj );		// previous values are destroyed
// console.log( obj.x );	// TypeError: Cannot read properties of null (reading 'x')