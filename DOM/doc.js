// getElementById() -> Returns a reference to the first object with the specified value of the ID attribute
var para1 = document.getElementById( 'para-1' );
console.log( para1 );		// <p id="para-1">Para 1</p>

// getElementsByClassName -> Returns a HTMLCollection of the elements that have all the classes given by classNames.
var xyzElements = document.getElementsByClassName( 'xyz' );
console.log( xyzElements );		// HTMLCollection(2) [div.xyz, section.xyz.abc]
console.log( xyzElements[0] );	// <div class="xyz">...</div>
console.log( xyzElements[1] );	// <section class="xyz abc">...</section>
console.log( xyzElements.length );// 2

// getElementsByTagName() -> Retrieves a collection of objects based on the specified element name
var tagElements = document.getElementsByTagName( 'p' );
console.log( tagElements );		// HTMLCollection(2) [p#para-1, p#para-2, para-1: p#para-1, para-2: p#para-2]
console.log( tagElements.length );// 2

// querySelector() -> Returns the first element that matches selectors.
var el = document.querySelector( '.xyz' );
console.log( el );		// <div class="xyz">...</div>

// querySelectorAll() -> Returns all the elements that matches selectors.
var els = document.querySelectorAll( '.xyz' );
console.log( els );		// NodeList(2) [div.xyz, section.xyz.abc]

// innerHTML() -> Executes html syntax if present in content
// innerTextL() -> Treats a pure content even if html syntax is present in content
setTimeout(() => {
	document.querySelector('p:first-of-type').innerHTML = '<span>Span 1</span> & <span>Span 2</span>';
	// Span 1 & Span 2
	document.querySelector('p:last-of-type').innerText = '<span>Span 3</span> & <span>Span 4</span>';
	// <span>Span 3</span> & <span>Span 4</span>
}, 10000);

// maipulating css
function changeColor(){
	document.getElementsByTagName('div')[0].style.color = "blue";
	document.getElementsByTagName('div')[0].style.backgroundColor = "#3dfe5d73";

	// classList -> To access the names of css classes attached to a html element in js
	document.getElementsByTagName('div')[0].classList.add('big');
	document.getElementsByTagName('p')[0].classList.remove('aqua');
}

// maipulating attributes
function changeImage(){
	const link = "https://tse3.mm.bing.net/th?id=OIP.KFUqLSju-1di-_3u97HQwQHaIg&pid=Api&P=0";
	// document.querySelector('img').src = link;

	// hasAttribute(value) -> Returns true if element has the attribute mentioned and false otherwise
	console.log(document.querySelector('img').hasAttribute('src'));	//true

	// getAttribute(value) -> Returns mentioned attribute value of the element
	console.log(document.querySelector('img').getAttribute('src'));
	
	// setAttribute(attribute, value) -> Sets the element's attribute to the value mentioned
	document.querySelector('img').setAttribute('src', link);
}


