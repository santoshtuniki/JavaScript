class Person{
	constructor( name, age ){
		console.log( this );	// context is the newly created object, Person {}
		this.name = name;
		this.age = age;
	}

	celebrateBirthday(){
		this.age++;
	}
}
const john = new Person( 'John', 32 );
console.log( john );	// Person { name: 'John', age: 32 }

john.celebrateBirthday();
console.log( john );	// Person { name: 'John', age: 33 }