// function expression is a syntax for defining function assigning it to async (params) => {
    // three major ways
    //function anonymous

    const Multiply =function(a,b){
        return a*b
    }
    console.log(Multiply(2,6));

const users = [
  { name: "Alice", phone: "1234567890" },
  { name: "Bob", phone: "9876543210" }
];
// Write your code below using an anonymous function expression:

const MaskedUsers= users.map(function(user){
const lastFour= user.phone.slice(-4);
return {
    name: user.name,
    phone:"xxxxxxx" + lastFour
}
});
console.log(MaskedUsers)

const addition = function(a,b,c){
    return a+b+c;
}
console.log(addition(3,5,6));

// An anonymous function means a function that does not have an identity or a name.


const CalculateSquare=function(number){
    return number*number
}
console.log(CalculateSquare(2));

//function named
//In JavaScript, a named function is a function that has an identifier (name) after the function keyword.
//This name can be used to reference the function inside its body (for recursion) or when debugging

function greet(){
    console.log("hello world")
}
greet();

const calculatedarea=function getArea (width,height){
    return width * height
}
console.log(calculatedarea(5,10))

//Arrow function 

let c= (a,b) => {
    return a+b;
}
console.log(c(2,5));

const Arrow= (a,b,c) => {
    return(a*b*c)
}
console.log(Arrow(2,3,5))

// Recursive function calls byitselfinside its own body

function reverseString(str) {
  // Base Case: If the string is empty or one character, return it
  if (str.length <= 1) {
    return str;
  }

  // Recursive Case: Take the first character and move it to the end
  return reverseString(str.slice(1)) + str[0];
}

// Test Case
console.log(reverseString("hello")); // Output: "olleh"

function Countdown(n) {
    if (n<1){
        return[]
    }
    const arr=Countdown (n-1)
    arr.unshift(n)
    return arr;
}
console.log(Countdown(5));
/**
 * Calculates the factorial of a number recursively.
 * @param {number} n - The input number.
 * @returns {number} The factorial result.
 */
function getFactorial(n) {
  // Base case: 0! and 1! are both 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case
  return n * getFactorial(n - 1);
}

// Example usage:
console.log(getFactorial(5)); // Output: 120

/**
 * Finds the nth Fibonacci number recursively.
 * @param {number} n - The position index.
 * @returns {number} The nth Fibonacci number.
 */
function getFibonacciNumber(n) {
  // Base case: returns 0 for 0, and 1 for 1
  if (n < 2) {
    return n;
  }
  // Recursive case
  return getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
}

// Example usage:
console.log(getFibonacciNumber(4)); // Output: 8
/**
 * Generates an array containing the Fibonacci series up to n terms.
 * @param {number} terms - Number of terms to generate.
 * @returns {number[]} The full Fibonacci series array.
 */
function generateFibonacciSeries(terms) {
  const series = [];
  for (let i = 0; i < terms; i++) {
    series.push(getFibonacciNumber(i));
  }
  return series;
}

// Example usage:
console.log(generateFibonacciSeries(6)); 
// Output: [0, 1, 1, 2, 3, 5, 8, 13]



// Difference between var or let or const

//redeclaration - declaring the same variables var -yes, let -no const- no  
// reassignment - assigning the values var yes let yes, const -No
// initialization - declaring the variables to the values var -yes let yes const -no
var age =20
console.log(age)
var age =17
console.log(age)
var a=90
console.log(a)
a=12
console.log(a)

let m=10
console.log(m)
m=33
console.log(m)

const k=20
console.log(k)
//initialization
var x
let y
const z=0

//Hoisting  - accessing of memory values given before code execution

//2 phases
// memory creation
//code execution

console.log(p)
var p=10
console.log(p)

// --- The var Behavior ---
console.log(userVar); // Outputs: undefined
var userVar = "Alice"; 

// --- The let & const Behavior ---
//console.log(userLet); // ❌ Throws ReferenceError (TDZ rule)
let userLet = "Bob"; 

sayHello(); // Outputs: "Hello!"

function sayHello() {
  console.log("Hello!");
}

greet()
function greet(){
    console.log("good morning")
}

sayHello();
//sayHai();

// Declaration
function sayHello() {
  console.log("Hello!");
}

// Expression
var sayHai = function() {
  console.log("Hi!");
};

var snack = "Chips";

function printSnack() {
  console.log(snack);
  var snack = "Chocolate";
  console.log(snack);
}

printSnack();



