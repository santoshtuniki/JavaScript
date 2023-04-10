// this -> call context of function

function foo(){
	console.log( this );
}
foo();

var john = {
	name: 'John',
	getName: function(){
		console.log( this );
		return this.name
	}
}
console.log( john.getName() );	//reference to john object

var getName = john.getName;
getName();	// reference to global reference

console.log( getName === john.getName );

/*	In 'BROWSER'

	var john = {
		name: 'John',
		getName: function(){
			console.log( this );
			return this.name
		}
	}
	console.log( john.getName() );

	var getName = john.getName;
	getName();

	{name: 'John', getName: ƒ}
	John
	Window {window: Window, self: Window, document: document, name: '', location: Location, …}

	getName === john.getName
	true

*/