console.log(sum(20, 30));

// function declaration synrax
// Even if called before function is declared, it still works
function sum(x, y){
	var result = x + y;
	return result
}

var result = sum(12, 13);	// function call
console.log("result = ", result);

// console.log(sum2(20, 30));	// TypeError: sum2 is not a function

// function expression syntax (more like variable declaration and assignment)
// if called before function is declared, it doesn't work
var sum2 = function(x, y){
	var result = x + y;
	return result
}

var result2 = sum2(13, 14);	// function call
console.log("result2 = ", result2);