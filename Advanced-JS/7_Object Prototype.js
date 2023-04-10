var obj = {
	x: 1	// x is an own property of obj
};

var proto = {
	y: 2	// y is an own property of proto
};

console.log( Object.getPrototypeOf( obj ) );	// Returns the prototype of an object (default)
// [Object: null prototype] {}

// setPrototypeOf(o: any, proto: object | null)
Object.setPrototypeOf( obj, proto);

console.log( obj );	// { x: 1 }
console.log( Object.getPrototypeOf( obj ) );	// { y: 2 }

// obj inherited the properties of its prototype (proto)
console.log( obj.y );	// 2

var obj2 = {
	z: 3	// z is an own property of obj2
};
Object.setPrototypeOf( obj2, proto);
console.log( Object.getPrototypeOf( obj2 ) );	// { y: 2 }
console.log( obj2.z );	// 3
console.log( obj2.y );	// 2

Object.setPrototypeOf( obj2, obj);
console.log( Object.getPrototypeOf( obj2 ) );	// { x: 1 }
console.log( obj2.z );	// 3
console.log( obj2.y );	// 2
console.log( obj2.x );	// 1

proto.y = 200;

console.log( Object.getPrototypeOf( obj ) );	// { x: 1 }
console.log( obj.y );
console.log( Object.getPrototypeOf( obj2 ) );	// { x: 1 }
console.log( obj2.y );