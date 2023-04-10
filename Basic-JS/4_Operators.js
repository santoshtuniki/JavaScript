// Arithmetic Opeartors
var x = 12, y = 13;
console.log("---- Arithmetic Opeartors ----")
console.log("10.5 + 20.25 = ", 10.5 + 20.25 );
console.log("x = ",x,", y = ",y);
console.log("x + y = ", x+y);
console.log("x - y = ", x-y);
console.log("x * y = ", x*y);
console.log("x / y = ", x/y);		// Full Division => results in Not a Quotient, but a floating number
console.log("x % y = ", x%y);
console.log("2 ** 3 = ", 2**3);	// 2 ^ 3 = 8
console.log();

// Relational Operators
// In the case of strings, compare the alphabetical order of the strings
console.log("---- Relational Opeartors ----")
var isBefore = "hello" < "hi";	// alphabetically 'hello' comes before 'hi'
console.log("hello < hi = ", isBefore); // true

isBefore = "hello" > "hi";
console.log("hello > hi = ", isBefore); // false

var isGreater = 10 > 9;
console.log("10 > 9 = ", isGreater); // true

console.log("x <= y : ", x <= y);
console.log("x >= y : ", x >= y);
console.log("x == y : ", x == y);
console.log("x != y : ", x != y);

console.log("1 == '1' : ", 1 == "1");	// Equality -> checks only the value
console.log("1 === '1' : ", 1 === "1");	// Strict equality -> checks both the value & datatype
console.log("1 !== '1' : ", 1 !== "1");	// // Strict inequality
console.log();

// Logical Operators
console.log("---- Logical Opeartors ----")
var isRaining = true, goingByWalk = true, goingByCar = false;
var takeUmbrella = isRaining && goingByWalk;
console.log("takeUmbrella: ", takeUmbrella);

var priceOfPhone = 42000, bankBalance = 20000, friendBankBalance = 80000, amIIntrested = true;
var willIButPhone = priceOfPhone < bankBalance && amIIntrested;
console.log("willIButPhone: ", willIButPhone);

willIButPhone = priceOfPhone < bankBalance || priceOfPhone < friendBankBalance;
console.log("Now willIButPhone: ", willIButPhone);

console.log("!true = ", !true);
console.log("!false = ", !false);

console.log("isRaining = ", isRaining);
console.log("!isRaining = ", !isRaining);
console.log();

// Miscellaneous Operators
console.log("---- Miscellaneous Opeartors ----")
var name = "John", message = "Good Morning";
console.log(message + " " + name);

console.log(typeof isRaining);

var city = "Mysore";
var isTrafficHuge = city === 'Bangalore' ? 'Yes' : 'No';
console.log("isTrafficHuge in ",city," = ", isTrafficHuge);

console.log(" 1 + 2 + 3 * 4 = ", 1 + 2 + 3 * 4);
console.log(" 1 + (2 + 3) * 4 = ",  1 + (2 + 3) * 4)

/* postIncrement( a++ ) => value is first assigned, then increased
preIncrement( ++a ) => value is first increased, then assigned */
var number = 0;
console.log( number++ );	// 0
console.log( ++number );	// 2
console.log( number );		// 2

/* postDecrement( a-- ) => value is first assigned, then decreased
preDecrement( --a ) => value is first decreased, then assigned */
