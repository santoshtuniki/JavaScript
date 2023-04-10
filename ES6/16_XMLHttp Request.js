const xhr = new XMLHttpRequest();

// Ajax ( Asynchronous JavaScript and XML )
xhr.onload = function(){
	console.log( xhr.responseText );
};

xhr.open( 'GET', 'https://jsonplaceholder.typicode.com/todos/1' );

xhr.send();

/*
	In Browser
	{
		"userId": 1,
		"id": 1,
		"title": "delectus aut autem",
		"completed": false
	}
*/