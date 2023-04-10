// function expression
const sum = function( x, y, callBack ){
	var result =  x + y;
	callBack( result );
};
// console.log(sum(10, 20));

/*
function logResult( result ){
	console.log( result );
}
sum( 10, 20, logResult );
*/

sum( 10, 20, function( result ){
	console.log( result );
});

/* One - time use functions, that need not be used repeatedly 
can be declared as above as nameless functions, i.e "Anonymous Functions" */
