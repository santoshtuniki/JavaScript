// onload() -> Fires immediately after the browser loads the object.
// can be applied on window, image, script
window.onload = function(){
	alert( 'The page has loaded' );
};

// onclick() -> A pointing device button has been pressed and released on an element.
function handleClick(){
	alert( 'I was clicked 1' );
}

function handleClick2(){
	alert( 'I was clicked 2' );
}

// using this way, only the last of the eventHandlers will be executed for an event
document.querySelector( 'button' ).onclick = handleClick;
document.querySelector( 'button' ).onclick = handleClick2;

// onmouseover() -> Fires when the user moves the mouse pointer into the object.
/*
document.getElementById( 'para-1' ).onmouseover = function(){
	console.log( 'mouse is over para' );
};
*/

// addEventListener(eventName, eventHandlerFunction) -> we can execute multiple eventHandlers for the same event
document.getElementById( 'para-1' ).addEventListener('mouseover', function(){
	console.log( 'mouse is over para (1)' );
});

document.getElementById( 'para-1' ).addEventListener('mouseover', function(){
	console.log( 'mouse is over para (2)' );
});

// Event Handler Context -> The DOM Node on which the element occurs
document.querySelector( '.btn' ).addEventListener('click', function( event ){
	console.log( this );	// <button class="btn">Check context</button>
	console.log( event );	// PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
});

// event Object methods
// event.preventDefault() -> stops browser to take us to new page i.e preventing its default action when anchor tag is clicked
document.querySelector( 'a' ).addEventListener('click', function( event ){
	if( !confirm('Are you sure you want to leave my website?') ){
		event.preventDefault();
	}
});

// Event Propagation
document.querySelector( '#div-c' ).addEventListener('click', function() {
	console.log( 'div-c clicked' );
	console.log( this );
});
// div-c clicked

document.querySelector( '#div-p' ).addEventListener('click', function( event ) {
	console.log( 'div-p clicked' );
	console.log( this );
	// event.stopPropagation();	// If we want to stop propagation at parent div & not get grand-parent div event handles
	console.log( event.target );	// The object on which the event occured or with which the event is associated
});
/* 
	div-c clicked
	div-p clicked
*/
// As parent div is enclosing child div, when we click on child div it also means parent div is also clicked

document.querySelector( '#div-gp' ).addEventListener('click', function() {
	console.log( 'div-gp clicked' );
	console.log( this );
});
/* 
	div-c clicked
	div-p clicked
	div-gp clicked
*/
// As grand-parent div is enclosing parent div which  inturn is enclosing child div, when we click on child div it also means parent div & grand-parent div is also clicked

