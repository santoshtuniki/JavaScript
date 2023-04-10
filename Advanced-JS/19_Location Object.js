// Execute in "BROWSER"

console.log( location );
/* 
	host: "medium.com"
	hostname: "medium.com"
	href: "https://medium.com/about?autoplay=1"
	origin: "https://medium.com"
	pathname: "/about"
	port: ""
	protocol: "https:"
*/

console.log( location.protocol );
console.log( location.path );

// page moves to this website
location = "https://www.google.com";
location.href = "https://www.google.com";

location.assign( "https://www.google.com" );	// previous page present in history stack

location.replace( "https://www.google.com" );	// previous page removed from history stack

location.reload();	// reloads the current URL, like the Refresh button.