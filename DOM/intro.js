// Execute in "BROWSER"

console.log( document );	// #document -> contains HTML code
console.dir( document );	// #document -> in object form

document.documentElement;	// Gets a reference to the root node of the document.

document.documentElement.style.backgroundColor = 'crimson';

document.documentElement.childNodes;	// Returns the children.
// NodeList(3) [head, text, body]
// 'text' appeared due to space b/w tags
document.documentElement.childNodes[0];
// <head>...</head>

document.title = "Document";

document.documentElement.childNodes[2].childNodes;
// NodeList(7) [text, p, text, p, text, p, text]
document.documentElement.childNodes[2].childNodes[1];
// <p>Para 1</p>
document.documentElement.childNodes[2].childNodes[1].innerHTML = 'New Text for Para 1';
// changes text from 'Para 1' to 'New Text for Para 1'