/* 
Try Catch Block -> To run code while bypassing the errors

Since the code is run line-by-line, at any line if an error occurs then
the "try" block doesn't execute the remaining code in try block, but 
moves into the "catch" block to perform exception handling

There is also "finally" block that is optional placed after 'catch' block
which is executed compulsorily after the execution of 'try'/'catch' block,i.e irrespective of error
*/

// Unlike in Java, JavaScript can have only "1" catch block

// foo();	// ReferenceError: foo is not defined

try{
	foo();	// since error occurs in this line, next line won't be executed. Moves to 'catch' block
	console.log( 'after foo called (within the try block)' );
} catch( error ){
	console.log( error.message );	// error objects have "message" property
} finally{
	console.log( 'inside the finally block' );
}

console.log( 'after foo called' );

/*
	foo is not defined
	after foo called
*/