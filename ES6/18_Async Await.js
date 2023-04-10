/* 
	async -> The word “async” before a function means one simple thing: 
				"A function always returns a promise". 
	Other values are wrapped in a resolved promise automatically.

	await -> await, works only inside async functions. 
	The keyword await makes JavaScript wait until that promise settles 
	and returns its result.

	It literally suspends the function execution until the promise settles, 
	and then resumes it with the promise result. 
	That doesn’t cost any CPU resources, because the JavaScript engine can 
	do other jobs in the meantime: execute other scripts, handle events, etc.
*/

const fetchAndAddTodos = async () => {
	try {
		const response = await fetch( 'https://jsonplaceholder.typicode.com/todos/1' );
		const todo = response.json();
		console.log( todo );
	} catch( error ){
		console.log( error.message );
	}
};
fetchAndAddTodos();