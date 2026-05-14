// Asynchronous 

//Event bubbling
//caputring
//delegation 

let parent=document.getElementById("outertext")
function action(){
    console.log("outertext")
}
parent.addEventListener("click", action());
let div1=document.getElementById("div1")
function action(){
console.log("parent element")
}
div1.addEventListener("click",action(),true)

let child=document.getElementById("innertext")
function action1(){
    console.log("innertext")
}
parent.addEventListener("click", action1(),true);



let div2=document.getElementById("div2")
function action2(){
    console.log("Top parent clicked")
}
div2.addEventListener("click",action2(),true)

const parent1 = document.getElementById('parent1');
const child1 = document.getElementById('child1');

parent1.addEventListener('click', () => {
  console.log('Parent1: Bubbling');
},false);

child1.addEventListener('click', () => {
  console.log('Child1: Clicked');
});

// Click Output:
// 1. "Child: Clicked"
// 2. "Parent: Bubbling"

parent1.addEventListener('click', () => {
  console.log('Parent1: Capturing');
}, true); // 'true' enables capturing

child1.addEventListener('click', () => {
  console.log('Child1: Clicked');
});

const myList=document.getElementById("myList")
myList.addEventListener("click", function (e){
    const target=e.target;
    if (target.matches("li")){

    
    target.style.backgroundColor="red";
    }

});

// <li>grapes</li>
const newLi =document.createElement('li');
newLi.textContent="grapes";
myList.appendChild(newLi);

//window.on scroll
console.log(window)

const father = document.getElementById('father');
const kids = document.getElementById('kids');

father.addEventListener('click', () => {
  console.log('father: Bubbling');
},false);

kids.addEventListener('click', () => {
  console.log('kids: Clicked');
});

father.addEventListener('click', () => {
  console.log('father: capturing');
},true);

kids.addEventListener('click', () => {
  console.log('kids: photo');
});







