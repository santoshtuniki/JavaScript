// we use prototype to define a "constructor" of a function

// constructor in  class
/*
	class Person {
		constructor(name, age) {
			this.name = name;
			this.age = age;
			this.celebrateBirthday = function () {
				this.age++;
			};
		}
	}
*/

function Person( name, age ){
	this.name = name;
	this.age = age;
	
	/*
	this.celebrateBirthday = function(){
		this.age++;
	};
	*/
}

// console.log( new Person() );	// Person {} => an empty object whose type is 'Person'
/*
	1) Using 'new' keyword, we created an empty object
	2) The newly created empty object becomes context of the function, when the function is called
			console.log( this );	// Person {}
	3) The context is then returned
	All this happens automatically.
*/

console.log( Person.prototype );	// {}
Person.prototype.celebrateBirthday = function(){
	this.age++;
};
console.log( Person.prototype );	// { celebrateBirthday: [Function (anonymous)] }
/* 
	whenever a new object is created of type 'Person', the function 
	"celebrateBirthday" is also created.This is wastage of memory and inefficient. 
	But as we can see that "prototype" of each object created is the same as 'Person'.
	Hence if the function 'celebrateBirthday' is added directly to the prototype of Person,
	then it can be inherited by each newly created object and is efficient.
*/

var john = new Person( 'John', 32 );
john.celebrateBirthday();
console.log( john );

var mary = new Person( 'Mary', 43 );
mary.celebrateBirthday();
console.log( mary );

console.log( john.__proto__ === Person.prototype);	// true
console.log( mary.__proto__ === Person.prototype);	// true