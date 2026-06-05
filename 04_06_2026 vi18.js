// IIFE- immediately invoked function expression 
// It uses a grouping operator () to turn a standard function definition into an expression, 
// followed by an invoking pair of parentheses () to execute it immediately.

//IIFE using anonymous

(function(){
    console.log("this will run ")
})();

//using arrow function 
(()=>{
    console.log("arrow function")
}) ()

// function currying Currying is a functional programming technique that transforms a function 
// with multiple arguments into a nested sequence of functions, each taking a single argument. 
// Instead of calling f(a, b, c), currying allows you to call f(a)(b)(c).
//  It relies heavily on JavaScript closures to remember the arguments passed in previous steps.

//normal function name(params) {
     function add(a,b){
        return a+b;
     }
     console.log(add(2,3))

     //function currying

     function curriedAdd(a){
        return function (b){

        
return a+b;
     }
    }
     console.log(curriedAdd(2)(3));

     function Add(a){
        return function(b){
            return function (c){
                return function (d){
            
           return a+b+c+d; 
        }
     }
    }
}
console.log(Add(2)(3)(4)(5));

// A closure is a function remembers and user variables from outside its scope
//even after the outer function has finished running
function createCounter() {
    let count = 0; // Local variable inside the outer function

    return function() { 
        count++; // 
        return count;
    };
}
                              
// Execution
const myCounter = createCounter(); 

console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2
console.log(myCounter()); // Output: 3
console.log(myCounter());

function outer() {
  let count = 1;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); 
counter()
counter();

//pure function always return the same output for the same input

function som(a, b) {
    return a + b;
}
console.log(som(2, 2)); // 3
console.log(som(3, 2)); // 3

function pureMultiply(a, b) {
    return a * b;
}
console.log(pureMultiply(2, 3)); // 6
// Impure function is a function 
// that can produce different outputs when given the same inputs, 
// or one that causes observable side effects by modifying data outside its local scope.

let tax = 20;
function calculateGST(productPrice) {
   return productPrice * (tax / 100) + productPrice;
}
console.log(calculateGST(15)); // Output depends on the value of 'tax'

let tex=30
function gstCalculate(priceProduct){
    return priceProduct * (tex/100) +priceProduct ;
}
console.log(gstCalculate(10));

var total =0;
function sum(a,b){
    total+= a+b;
    return total;
}
console.log(sum(1,2))
console.log(sum(1,2))
console.log(sum(1,2))


