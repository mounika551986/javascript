//DOM

//DOM - Document Object Model

//DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
//DOM is not a programming language, but it is a convention for how to interact with objects in a document. It can be used with any programming language, but it is most commonly used with JavaScript.
// dom traversing - parentNode, childNodes, firstChild, lastChild, nextSibling, previousSibling
let name = document.getElementById("name");
console.log(name)
let parentElement= name.parentElement;
console.log(parentElement)
console.log(parentElement.children);
console.log(parentElement.firstElementChild);
console.log(parentElement.lastElementChild);
console.log(name.nextSibling);
console.log(name.previousSibling);

// creating elements
let newElement = document.createElement("p");
newElement.innerText = "This is a new paragraph.";
console.log(newElement);
parentElement.appendChild(newElement);

//prepend
parentElement.prepend(newElement);

//before
parentElement.before(newElement);


//after
parentElement.after(newElement);

//remove
newElement.remove();

//clone
let cloneElement = name.cloneNode(true);
console.log(cloneElement);
parentElement.appendChild(cloneElement);

//replace
let newHeading = document.createElement("h1");
newHeading.innerText = "This is a new heading.";
name.replaceWith(newHeading);

//button
let button = document.createElement("button");
button.innerText = "Click me";
console.log(button);

// btn .onclick = function() {
//     alert("Button clicked!");
// }
// console.log(btn);

//addEventListener

function click() {
    alert("Button clicked!");
    btn.innerText ="buttonclick";
}
btn.addEventListener("click", click);

btn.addEventListener('click', () => {
  console.log('This will only run once.');
}, { once: true });
















