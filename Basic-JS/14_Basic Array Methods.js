var days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday'
];
console.log( days );

// sort() Method -> arrange the items in Alphabetical order
days.sort();
console.log( days );

// reverse() Method -> reverse the order of the items in an array
days.reverse(); 
console.log( days );

/* indexOf() Method -> gives the index of the element in the array,
if element is not in the array gives -1 and 
if element is repeated, then the lowest index of that element is given */
console.log( days.indexOf( 'Monday' ) );	// 3 
console.log( days.indexOf( 'Sunday' ) );	// -1

/*
	days[days.length] = 'Wednesday';
	console.log( days );
	console.log( days.indexOf( 'Wednesday' ));	// 0
*/

// Sorting numbers
var numbers = [ 20, 60, 40, 65, 80, 8, 22, 30, 200, 2, 3500 ];
numbers.sort( function( x, y ){
	return x - y;
});
console.log( numbers );

// numbers.sort();
/*
	[
		2,   20, 200, 22,
		30, 3500,  40, 60,
		65,    8,  80
	]
*/

/*  Ex: 2, 20, 200, 22
	here hundereds is '2' but tens is '0' for 
	20, 200 but for 22 it is '2', so it comes later than 20, 200
*/

// Sorting Objects
var projects = [
	{ hours: 20, name: 'Project 1' },
	{ hours: 60, name: 'Project 2' },
	{ hours: 40, name: 'Project 3' },
	{ hours: 65, name: 'Project 4' },
	{ hours: 80, name: 'Project 5' }
];
projects.sort( function( x, y ){
	return x.hours - y.hours;
});
console.log( projects );

// push() method -> to add an element at the end of the array
days.push( 'Saturday' );
days.push( 'Sunday' );
days.sort();
console.log( days );

// pop() method -> to remove an element at the end of the array
days.pop();
var removedDays = days.pop();	// returns the removed element
console.log( days );
console.log( removedDays );

// unshift() method -> to add an element at the start of the array
days.unshift( 'Holiday' );
console.log( days );

// shift() method -> to remove an element at the start of the array
days.shift();
removedDays = days.shift();
console.log( days );
console.log( removedDays );

// splice() method -> to add/remove an element in between the array
days.push( 'Friday', 'Tuesday', 'Wednesday' );
console.log( days );
/*
	[
		'Monday',
		'Saturday',
		'Sunday',
		'Thursday',
		'Friday',
		'Tuesday',
		'Wednesday'
	]
*/

// splice( starting index, no. of elements to be removed, Elements to be added from starting index )
days.splice( 2, 3, 'Jan', 'Feb', 'Mar', 'Apr');
console.log( days );
/*
	[
		'Monday',  'Saturday',
		'Jan',     'Feb',
		'Mar',     'Apr',
		'Tuesday', 'Wednesday'
	]
*/

days.splice(2, 0, 'Sunday', 'Thursday', 'Friday' );
console.log( days );
/*
	[
		'Monday',    'Saturday',
		'Sunday',    'Thursday',
		'Friday',    'Jan',
		'Feb',       'Mar',
		'Apr',       'Tuesday',
		'Wednesday'
	]
*/

// slice() method -> create a copy of part of the array
// slice(starting index, ending index), starting index included but ending index excluded
var slicedDays = days.slice( 5, 9 )	// elements with index 2,3 only 4 not inclded
console.log( slicedDays );

console.log( days.slice( 0, 4 ));	// elements with index 0 to 3
console.log( days.slice( 4 ));	// elements with index 4 to end