// IIFE with a return value
/* Here the return variable is captured in the variable,  
i.e someVariable is a 'variable' */
const someVariable = (function(){
	return 100;
})();
console.log( someVariable );

// Function Expression
/* Here 'sum' is actually a 'reference' to the function 
and we need to make 'Function call' to execute it */
const sum = function( x, y ){
	return x + y;
};
console.log( sum( 10, 20 ));