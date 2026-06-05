//Global scope Variables declared outside of any function or block belong to the global scope. 
// They can be accessed and modified from absolutely anywhere in your program.

let a =10

function hello(b,c){
    console.log(b,c,a)
}
hello(2,3)


const ApllicationName="task manager";

function printAppName(){
    console.log("ApplicationName")
}
if (true){
    console.log('ApplicationName')
}
printAppName();


// block scope Introduced in ES6, block scope dictates that variables declared inside curly braces {} 
// (like if statements, for loops, or switch cases) are isolated to that block.
//let and const are block scope
{
    var b=10;

    let f=5;

    const z =10;
    console.log(f)
    console.log(z)
}
    console.log(b)
    

if (true) {
    let blockScopedUser = "Alice";
    const blockScopedRole = "Admin";
    var functionScopedVar = "I can escape!";
}

// Throws ReferenceError: blockScopedUser is not defined
// console.log(blockScopedUser); 

// Throws ReferenceError: blockScopedRole is not defined
// console.log(blockScopedRole); 

// Outputs: "I can escape!" (Because var does NOT respect block scope)
console.log(functionScopedVar); 

//var can be accesed outside the function
//let or const cannot be accesed the function

//function scope  Variables declared inside a function are trapped inside that specific function. 
// They cannot be accessed or manipulated from the outside world.
//var is a functional scope 

function processPayment() {
    // Function-scoped variable
    var secureToken = "XYZ123"; 
    let APP ="abc"
    const bob="ghd"
    console.log(bob)
    console.log(APP)
    console.log(secureToken); // Works perfectly
}

processPayment();

// Throws ReferenceError: secureToken is not defined
//console.log(secureToken); 


//Create programs demonstrating scope accessibility.

//Global scope

var user3="mounika"

function globalUser(user1,user2){
    console.log(U=user1,user2,user3,)
}
globalUser("rahul",'MYRA');


//function scope

function Paintcolors(){
var color="red"
let colors="blue"
const colour="orange"
console.log(color)
console.log(colors)
console.log(colour)

}
Paintcolors()


//block scope

{
    var e = "apple"
    let g="mango"
    const m="sapota"
    console.log(g)
    console.log(m)
}

console.log(e)

// Recursive function

function countdown(n){
    if(n<=0){
        console.log("lift up")
        return;
    }
    console.log(n)
    countdown(n-1)
}
countdown(4);

function sum(n){
    if(n<=0){
        return;
    }
    console.log(n)
    sum(n-1)
}
sum(10)

function factorial(n){
    if(n<=1){
        return 1;

    }
    return n* factorial (n-1);
}
console.log(factorial(5));

function sumArray(arr) {
  // Base case: Empty array has a sum of 0
  if (arr.length === 0) return 0;
  
  // Recursive case: First element + sum of the remaining slice
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4])); // 10

function reverseString(str) {
  // Base case: Empty or single character string
  if (str.length <= 1) return str;
  
  // Recursive case: Reverse the tail, then append the head
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // "olleh"

function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorialIterative(4))