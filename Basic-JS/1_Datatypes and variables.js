// number, boolean, string => datatypes in JavaScript
// undefined => default value for variables

// number
var x = 1, y, z = 2.135;
console.log( typeof x );	// number
console.log( typeof y );	// undefined
console.log( typeof z );	// number

// boolean
var isItRaining = true, isItPouring = false;
console.log( typeof isItRaining );	// boolean
console.log( typeof isItPouring );	// boolean


// string
var name = "John", message = 'Good Morning';
console.log( typeof name );	// string
console.log( typeof message );	// string

console.log("Length of string(message) = ", message.length);	// 12
console.log("string concatanation: ", message+' '+name);	// Good Morning John