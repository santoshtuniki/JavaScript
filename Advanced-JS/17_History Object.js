// Execute in "BROWSER"

console.log( history );
// History {length: 1, scrollRestoration: 'auto', state: null}

history.back();	// to goto previous page
history.forward();	// to goto forward page

history.go( -1 );	// go 1 page backward
history.go( 2 );	// go 2 pages forward

// pushState()-> adds an entry to the browser's session history stack.
// pushState(state, unused, url) -> unused is compulsory, pass an empty string to be safe. url optional
const state = { page_id: 1, user_id: 5 };
const url = "hello-world.html";

history.pushState(state, "", url);