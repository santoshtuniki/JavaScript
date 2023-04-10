var today = new Date();
console.log( today );
// 2023-03-10T05:31:52.528Z
/*
	Before 'T', it is date in year-month-date format &
	After 'T', it is time in hour:min:sec.millisec
	Z => standard timezone of U.K(GMT) i.e, 5 and a half before Indian time Zone
	so Indian time Zone = GMT+0530 (India Standard Time)
*/

/*
	Date( year: number, monthIndex: number, date?: number | undefined,
		 hours?: number | undefined, minutes?: number | undefined, 
		 seconds?: number | undefined, ms?: number | undefined )
	The month as a number between 0 and 11 ( January to December ).
	Creates a new Date.
*/

/*
var milleniumStart = new Date( 2000, 0, 1);
console.log( milleniumStart );
// 1999-12-31T18:30:00.000Z
*/

var milleniumStart = new Date( 2000, 0, 1, 5, 30 );
console.log( milleniumStart );
// 2000-01-01T00:00:00.000Z

// setDate() -> Sets the day-of-the-month, using local time.
// getDate() -> Gets the day-of-the-month, using local time.
today.setDate( today.getDate() + 1 );
console.log( today );
// 2023-03-11T05:50:33.985Z

var July31 = new Date( 2020, 6, 31, 5, 30 );
console.log( July31 );
// 2020-07-31T00:00:00.000Z

July31.setDate( July31.getDate() + 1 );
console.log( July31 );
// 2020-08-01T00:00:00.000Z

// getters in Date Object
console.log( July31.getFullYear() );
console.log( July31.getMonth() );
console.log( July31.getDay() );

// setters in Date Object
var today = new Date();
console.log( today );
today.setDate( 9 );
console.log( today );

console.log( today.toTimeString() );	// Returns only time as a string value, as local time.