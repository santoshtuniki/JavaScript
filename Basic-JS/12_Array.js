// Array Literal Syntax
var days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday'
];
console.log( days );
console.log( days[2] );

days[2] = 'Wed';
console.log( days );

days[5] = 'Saturday';
console.log( days );

days[10] = 'A day in Mars';
console.log( days );
/* 
	[
		'Monday',
		'Tuesday',
		'Wed',
		'Thursday',
		'Friday',
		'Saturday',
		<4 empty items>,
		'A day in Mars'
	]
*/
console.log( days[8] );		// undefined
console.log( days[11] );	// undefined

/* if we log an item 'beyond' the array (or) an 'empty' in the array, 
it gives "undefined" */

console.log( "Length of Array  = ", days.length );

var dummyArray = [
	'hello',
	1,
	true,
	null,
	undefined
];

console.log( dummyArray );

for(var i = 0; i < dummyArray.length; i++){
	console.log( dummyArray[i], " & type is ",typeof dummyArray[i]);
}
/*
	hello  & type is  string
	1  & type is  number
	true  & type is  boolean
	null  & type is  object
	undefined  & type is  undefined
*/

// 2D array
var matrix = [
	[ 1, 2, 3, 4 ],
	[ 5, 6, 7, 8 ],
	[ 9, 10, 11, 12, 13, 14 ]
];
console.log( matrix );
console.log( matrix[1] );
console.log( matrix[1][2] );

console.log( matrix[2][4] );
console.log( matrix[2][5] );