/*
	response.json() -> Note that despite the method being named json(), 
	the result is not JSON but is instead the result of taking JSON as input
	and parsing it to produce a JavaScript object.
	
	Therefore, it returns a "A Promise that resolves to a JavaScript object".
*/


// fetch() by default makes a 'GET' request & returns a Promise
fetch( 'https://jsonplaceholder.typicode.com/todos/1' )
	.then( ( response ) => response.json() )
	.then( ( value ) => console.log( value ) )
	.catch( ( error ) => console.log( error.message ) );

/*
	In Browser
	Object { userId: 1, id: 1, title: "delectus aut autem", completed: false }
*/

// 'POST' data -> fetch( url, body, headers )
const newData = {
	"userId": 1,
	"title": "quis ut nam facilis et officia qui",
	"completed": false
};

// Always, the 'body' to be posted must be in 'JSON' format only.

fetch( 
	'https://jsonplaceholder.typicode.com/todos', 
	{
		method: 'POST',
		body: JSON.stringify( newData )
	},
	{
		headers: {
			'Content-Type': 'application/json'
		}
	}
)
	.then( response => response.json() )
	.then( ( value ) => console.log( value ) )
	.catch( ( error ) => console.log( error.message ) );