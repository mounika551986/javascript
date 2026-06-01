// 5. Mini Assignment
// Develop a JavaScript program demonstrating all loop types and function concepts covered in the recordings.

// loops
//for loop will run a block of code a number of times (Best when the number of iterations is known)
let i=0;
for(i=0;i<=4;i++) {
    console.log(i);
}

//while loop will run a block of code as long as a specified condition is true
//when the condition depends on a changing variable
let j=0;
while (j<=3){
    console.log(j);
    j++;
}


//do while loop will run a block of code at least once, and then repeat the loop as long as a specified condition is true
//when you want to ensure that the loop body is executed at least once

let k=0;
do{
    console.log(k);
    k++;
}while(k<=2);

//for...in loop will iterate over the properties of an object (keys)

const person={name:"mounika",city:"hyderabad",age:25};
for(let key in person){
    console.log(key+": "+person[key]);

}

// for ...of loop will iterate over the values of an iterable object (like an array & strings)
const numbers=[1,2];
for(let number of numbers){
    console.log(number);
}
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}
// functions concept

function hello(){
    console.log("good morning")

}
hello();

//function without parameters 
function greet(){
    console.log("hello mounika")
}
greet();

//function with parameters will take input and perform a specific task
function greet1(name,role){
    console.log(`hello ${name} i am a senior developer in ${role}`);
}
greet1("mounika", "JavaScript");

//function with default parameters will use the default value if no argument is passed
function greet2(name="guest"){
    console.log(`hello ${name}`);
}
greet2();
greet2("mounika");


//function with arguments will run a block of code when called.
//  They can take parameters and return values.
function subtract(x,y){
    console.log(x-y);
}
subtract(10,5);

// parameter priority order of precedence for function parameters is as follows:

function name(a=1,b=2,c=3){
    console.log(a,b,c);
}
name(2,3,undefined);

// rest parameters allow a function to accept an indefinite number of arguments as an array.
function sum(a,b,c,...f){
    console.log(a,b,c,f);
}
sum(1,2,3,4,5,6,7);

//Argument objects are an array-like object that contains the values of the arguments passed to a function.
function multiply(x,y){
    console.log(arguments[0] * arguments[1]);
}
multiply(5,10);

