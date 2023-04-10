// Execute in "BROWSER"

// alert() -> a blocking method, blocks the execution of further lines of code till you take action 'ok'
alert( 'This is your information' );
console.log( 'after alert' );

// confirm() -> return a boolean confirming our action, button 'ok' returns "true" & 'cancel' returns "false"
var result = confirm( 'Do you really want to exit the website?' );
console.log( result );

// prompt() -> take input from users
var response = prompt( 'Enter your favourite city', 'Bangalore' );	// 'Bangalore' is default value
console.log( response );