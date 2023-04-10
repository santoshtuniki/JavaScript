class Person{
	constructor( name, age ){
		this.name = name;
		this.age = age;
	}

	celebrateBirthday(){
		this.age++;
	}
}

// In JS, we have only 1 constructor per class
class Employee extends Person{
	constructor( name, age, role, department ){
		super( name, age );

		this.role = role;
		this.department = department;
	}

	promote(){
		this.role = 'Senior' + this.role;
	}

	celebrateBirthday(){
		super.celebrateBirthday();	// super/parent class method executed
		console.log( 'Happy Birthday' );
	}
}

const john = new Employee('John', 32, 'Web developer', 'IT');
console.log( john );	// Employee { name: 'John', age: 32, role: 'Web developer', 'department: 'IT' }

john.promote();
console.log( john );	// Employee { name: 'John', age: 32, role: 'SeniorWeb developer', 'department: 'IT' }

john.celebrateBirthday();
console.log( john );