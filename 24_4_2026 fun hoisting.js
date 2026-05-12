//functions
//hoisting where the interfere moves declarations to top of their containing

console.log(a)
var a=10
console.log(a)

let= sum(10,20) 

 function sum(val1,val2){

 
 console.log(val1+val2)
}

//scope - scope determines where variables and functions can be accessed

// Global scope- variables declared outside any function or block

//function scope- variables declared inside a function (using var,let const)

// block scope (introduced in ES6 with let and const ) variables are restricted to the nearest curly bases {} var does not support block scope
 
//lexical scope -functions remember the environment where they are created



//Global scope

const laptop= "macbook";

function showlaptop(){
    console.log(laptop);
}
showlaptop();
console.log(laptop);

//function scope
function greet(){
    var a= "hello";
    console.log(a)
}
greet()
console.log(a)

//block scope function

if (true){
    var m = "hai"
  //  let N ="great"
   // const o =" good"
}
console.log(m)
//console.log(N)
//console.log(o)

//Lexical scope (the chain)- inner function 'looks up' to find variables in parent's yard

function outer(){
    const outervar= ' i am out side';

function inner(){
    console.log(outervar);
}
    inner ();
}
outer();

// recursive function is a function that calls itself untill it reaches a specific stopping condition

function rec(n){
    if(n>0){
        console.log(n)
        rec(n-1)
    }
}
rec(10);

//IIFE-immediately invoked function expression (Data privacy and encapsulation, global name place will not pollute)
//function call cheyaka munde execute aiepotundi

(function (){
    console.log('IIFE')
    var m=2
    console.log(m)
    let s=3
    console.log(s)
        const b =4
        console.log (b)
    

}) ()

//function currying multiple parameters in single function in sinle parameter

function add (a){
 return function(b){

console.log('second function',b,a)
return "done"
    }
}

var v=add(10)(20)
console.log((v))

function add (a){
    return function(b){

    
        console.log((b/100)*100)
        return"correct"

    }

}
var f=add(100)(99)
console.log(f)