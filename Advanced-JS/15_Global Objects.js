// Execute in "BROWSER"
console.log( window );

// "global object" -> Any variable we create is a property of window object
var x = 1;
window.x;	// 1

window.y = 2;
y;	// 2