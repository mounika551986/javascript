//DOM

// Document object model

// it will attach the file in the tree structure

// HTML
// Head (meta tags)     body  header(nav) section footer... content 

// reading DOM properties

// selecting DOM elements

//getElementById() The document.getElementById() method is one of the most common ways to interact with a web page using JavaScript. It allows you to find a specific HTML element by its unique id attribute so you can read its content or change its appearance.


//getElementByClassName()                                       

//getElementByTagName

//querySelector

//querySelectorAll
console.log(document)

let h1= document.getElementById("heading")
let h4 = document.getElementById('text')
let h2 = document.getElementById('heading2')
console.log(h1)
console.log(h4)
console.log(h2)

let c = document.getElementsByClassName("h1")
console.log(c)

let d= document.getElementsByTagName("h1")
console.log(d)

let e= document.querySelector("h1")
console.log(e)

let f =document.querySelectorAll('h1')
console.log(f)

const elements = document.querySelectorAll(".blue-text");

elements.forEach((el) => {
  el.style.color = "blue";
});
console.log(elements)

const a =document.getElementById("firstp")
console.log(a)

const b= document.getElementsByClassName("firstp")
console.log(b)

const r =document.getElementsByTagName("firstp")
console.log(r)

const s =document.querySelector("p")
console.log(s)
const t=document.querySelectorAll("p")
console.log(t)

const b1 = document.getElementById("Secondp1")
console.log(b1);









