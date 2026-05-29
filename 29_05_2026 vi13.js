// conditional satements control the flow of execution by running specific blocks of code only when certain conditions are met. 
// They essentially allow your program to make decisions based on inputs or data values. 

//if statement : Executes a block of code only if the specified condition evaluates to true. 

// else statement Follows an if block and runs only if the condition is false. 

//else if statement : Used to test a new condition if the previous if or else if condition was false. 

//switch statement Evaluates an expression against multiple possible case values. 
// It is often used as a cleaner alternative to multiple else if statements

 // if statement Runs code only if the condition is true.

let temperature = 30;

if (temperature > 25) {
  console.log("It is a hot day!");
}

// if else  runs one block if true and a different block if false

    let hour = 14;

if (hour < 12) {
  console.log("Good morning");
} else {
  console.log("Good afternoon");
}

// else if statement Tests multiple conditions in order.


let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // This block runs
} else {
  console.log("Grade: C");
}

//switch statement Matches a single value against multiple cases. 
// Always use break to stop execution from bleeding into the next case.

let pet = "dog";

switch (pet) {
  case "cat":
    console.log("Meow!");
    break;
  case "dog":
    console.log("Woof!"); // This block runs
    break;
  default:
    console.log("Unknown pet sound");
}

// if statement

let a = 25;
if (a>20) {
    console.log("It is a holiday")
}

//if else
let b = 30
if (b>40){
    console.log("tomorrow is a holiday")
}else (b<40) 
    console.log("today is a holiday")

//else if

let marks=85
if (marks>95){
    console.log("grade A")
}else if(marks>90){
    console.log("grade B")
}else if (marks>80){
    console.log("grade C")
}

//switch statement

let animal= "tiger";
switch(animal){
    case "tiger":
console.log("Roar");
break;
case "dog":
    console.log("bow bow");
break;
case "default" :
console.log("no animal sound")

}

// //truthy and falsy values
//falsy values: false,0,"",null,undefined,NaN
//truthy values: all values that are not falsy

if (true) {
    console.log("This is a truthy value.")
}
if (0) {
    console.log("this is a truthy value.")
}
if (1) {
    console.log("this is a truthy value.")
}
if ("hello") {
    console.log("this is a truthy value.")
}
if ("") {
    console.log("this is a falsy value.")
}
if (false) {
  console.log("This is a falsy value")
}

if (null) {
    console.log("this is a falsy value.")
}
if (undefined) {
    console.log("this is a falsy value.")
}
if (NaN) {
    console.log("this is a falsy value.")
}

if (0) {
  console.log("this won't run")

}else {
  console.log("0 is a falsy value")
}





