/* global variable => can be accessed inside & outside functions
local variable => can be access only inside the function, where it is defined */

/* global function => can be called from anywhere
local function => can be called only  from inside the function, where it is defined */

var global_x = 100;	// global variable
console.log("outside of functions, global_x = ",global_x);	// 100

function foo(){		// global function
	var local_foo_x = 200;	// local variable
	console.log("inside foo, global_x = ",global_x);	// 100
	console.log("inside foo, local_foo_x = ",local_foo_x);		// 200

	function bar(){	// local function
		var local_bar_x = 300;
		console.log("inside bar, global_x = ",global_x);	// 100
		console.log("inside bar, local_foo_x = ",local_foo_x);		// 200 --> since bar() is enclosed within foo()
		console.log("inside bar, local_bar_x = ",local_bar_x);		// 300
	}

	bar();ss
	// console.log("inside foo, local_bar_x = ",local_bar_x);		// ReferenceError: local_bar_x is not defined
}

foo();

// bar();	// ReferenceError: bar is not defined
// console.log("outside of functions, local_foo_x = ",local_foo_x);	// ReferenceError: local_foo_x is not defined