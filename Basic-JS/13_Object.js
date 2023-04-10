var sholay = {
	name: 'Sholay',
	cast: [
		'Amitabh', 'Hema', 'Dharmendra', 'Jaya'
	],
	"box office stats": {
		countries: 10,
		collection: 12300000
	},
	addToCollection: function( amount ){
		// sholay["box office stats"].collection += amount;
		this["box office stats"].collection += amount;
	}
};
// 'this' is used when we try to access the value of property form 'within' the object itself
// 'this' is context of the method

console.log( sholay );
console.log( sholay.name );	// Access the properties of Object using dot(.) operator
console.log( sholay.cast );
console.log( sholay.cast[0] );

/* In cases where 'double qoutes' is compulsory, we can't use dot(.) operator 
to access the value of property of an Object instead  use ["property"] */
// console.log( sholay."box office stats");	// SyntaxError: Unexpected string
console.log( sholay["box office stats"]);
console.log( sholay["box office stats"].collection);

// ["property"] can also be used to access values that can be accessed with dot(.)
console.log( sholay["box office stats"]["countries"]);

sholay.addToCollection( 35000 );
console.log( sholay );
console.log( sholay["box office stats"].collection);

// Adding properties to Object
sholay.villain = 'Gabbar Singh';
console.log( sholay );

sholay.addToCast = function( newMember ){
	this.cast[this.cast.length] = newMember;
};
console.log( sholay );

sholay.addToCast( 'Sanjay' );
sholay.addToCast( 'Amjad' );
console.log( sholay );

// Removing properties to Object
delete sholay["box office stats"];
console.log( sholay );

/*
Internally JavaScript actually has two different approaches for testing equality.
Primitives like strings and numbers are compared by their value, 
while objects like arrays, dates, and plain objects are compared by their "reference".
That comparison by reference basically checks to see if the objects given refer to the same location in memory.
*/
var oneObj = {Song: "Prayer",Year:2021};
var twoObj = {Song:"Prayer",Year: 2021}; 

/*
So both ‘==’ and ‘===’ will return false for this scenario as object are not primitive 
and points to different memory locations.
*/
console.log(oneObj==twoObj);	// false
console.log(oneObj===twoObj);	// false
