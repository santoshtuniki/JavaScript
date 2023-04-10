// JavaScript Object Notation (JSON)

const strProducts = `
[
	{
		"name": "Hammer",
		"description": "A claw hammer",
		"price": 120,
		"rating": {
			"min": 2,
			"max": 5
		}
	},
	{
		"name": "Video game controller",
		"description": "A video game controller",
		"price": 15000
	}
]
`;

var products = JSON.parse( strProducts );	// Converts a JSON string into an object/array.
console.log( products );

var newProducts = {
	name: "biscuits",
	"description": "Whole wheat biscuits",
	price: 30
};
products.push( newProducts );
console.log( products );

var sendBackProducts = JSON.stringify( products ); // Converts a JavaScript value to a JSON string.
console.log( sendBackProducts );