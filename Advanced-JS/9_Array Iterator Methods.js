var days = [
	{ day: 'Sunday', hours: 2 },
	{ day: 'Monday', hours: 8 },
	{ day: 'Tuesday', hours: 7 },
	{ day: 'Wednesday', hours: 10 }
];

// forEach() -> iterates over each item in the array
days.forEach(function( item ){
	console.log( item );
});
/*
	{ day: 'Sunday', hours: 2 }
	{ day: 'Monday', hours: 8 }
	{ day: 'Tuesday', hours: 7 }
	{ day: 'Wednesday', hours: 10 }
*/

// filter() -> returns an array with items from the given array that satisfy condition mentioned
var filteredDays = days.filter(function( item ){
	return item.hours >= 8;
});
console.log( filteredDays );
/*
	[ 
		{ day: 'Monday', hours: 8 }, 
		{ day: 'Wednesday', hours: 10 } 
	]
*/

// map() -> returns an array with same length as the given array with items that changes according to the condition mentioned
var numbers = [ 1, 2, 3, 4, 5];
var squares = numbers.map(function( item ){
	return item * item;
});
console.log( squares );
/*
	[ 1, 4, 9, 16, 25 ]
*/

// some() -> Returns a boolean. Tests whether at least one element in the array passes the test implemented by the provided function
var evenAtleast  = numbers.some(function( item ){
	return item % 2 === 0;
});
console.log( evenAtleast );

// every() -> Returns a boolean. Tests whether all elements in the array pass the test implemented by the provided function
var oddAll = numbers.every(function( item ){
	return item % 2 !== 0;
});
console.log( oddAll );

/* 
	reduce() -> Executes a user-supplied "reducer" callback function on each element of the array, 
	in order, passing in the return value from the calculation on the preceding element. 
	The final result of running the reducer across all elements of the array is a single value.
*/
var reduce = numbers.reduce(function(accumulator, currentValue){
	var result = accumulator + currentValue;
	return result;
},0);
console.log( reduce );