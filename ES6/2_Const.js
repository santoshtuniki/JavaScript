// const when declared must be initialized
/*
	const x;	// SyntaxError: Missing initializer in const declaration
*/

const x = 1;
/*
	value cannot be changed once declared for 'const'
	x = 2;	// TypeError: Assignment to constant variable.
*/

const obj = {
	y: 1
}
obj.y++;
console.log( obj );	// { y: 2 }
/*
	Whenever an object is 'const', it doesn't mean that object is not mutable(changes possible)
	You can still change the object i.e properties can be changed, but you cannot assign 'obj' to another object.

	obj = { y: 2 };	// TypeError: Assignment to constant variable.
*/