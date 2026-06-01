// functions will run run block of code when called. They can take parameters and return values.
//function functionName(parameters) {code to be executed}
// functions without parameters
function greet() {
    console.log("hello world");

}
greet();

// practice
function showWelcomeMessage() {
  console.log("Welcome back to our application!");
}

showWelcomeMessage(); 



// functions with parameters
function greet1(a,b) {
    console.log(a + " and " + b + " are friends.");
}
greet1("Alice", "Bob");


// Definition with two parameters: 'name' and 'role'
function greetUser(name, role, city) {
  console.log(`Hello ${name}, you are logged in as a ${role} from ${city}.`);
}

// Execution with corresponding arguments
greetUser("Alice", "Admin");   
// Output: Hello Alice, you are logged in as a Admin.

greetUser("Bob", "Moderator"); 
// Output: Hello Bob, you are logged in as a Moderator.

greetUser("Charlie", "User", "Hyderabad");

//default parameters
function greet2(name="guest"){
    console.log(`hello ${name}`);

}
greet2();
greet2("Alice");


function greet3(a="mounika",b="navya") {
    console.log(`hello ${a} and ${b} are good friends`);
}
greet3();
greet3("rahul", "sneha");

// argument parameters are the values passed to a function when it is called. 
// They are used to provide input to the function 
// and can be accessed within the function using the parameter names defined in the function declaration.

function add(x,y){
    console.log(x+y);
}
add(5,10);

function name(a=0,b=30,c=40){
console.log(a,b,c);
}
name(10,20,undefined);

// rest parameters allow a function to accept an indefinite number of arguments as an array.
function sum(a,b,c,...f){
    console.log(a,b,c,f);
}
sum(1,2,3,4,5,6,7);

//parameter priority order of precedence for function parameters is as follows:
//1. Arguments passed during function call (highest priority)
//2. Default parameters defined in the function declaration
//3. Rest parameters (lowest priority)

function example(a=10,b=20,...rest){
    console.log(a,b,rest);
}
example(1,2,3,4,5); // Output: 1 2 [3, 4, 5]

//argument object is an array-like object that contains the values of the arguments passed to a function.
function example1(){
    console.log(arguments);
}
example1(1,2,3); // Output: [1, 2, 3]

//Practice passing arguments and understand parameter handling.
function displayInfo(name, age, city) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}
displayInfo("Alice", 30, "New York"); 

// creating examples using the arguments object
function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(findMax(1, 2, 3, 4)); // Output: 4

function findMin() {
    let min =Infinity;
    for (i=0; i< arguments.length; i++){
        if(arguments[i]<min){
            min=arguments[i];
        }
    }
    return min;
}
console.log(findMin(1, 2, 3, 4));

function showlog(){
    console.log("Total arguments passed: "+arguments.length);
    console.log("first item: "+arguments[0]);
    console.log("second item: "+arguments[1]);
}
showlog("apple","banana","cherry");

function displayArguments(a,b,c,...rest){
    console.log("first argument: "+a);
    console.log("second argument: "+b);
    console.log("third argument: "+c);
    console.log("rest of the arguments: "+rest);
}
displayArguments(1,2,3,4,45,6);

//•	Implement Rest Parameters and compare them with the Arguments Object.
function restExample(...args) {
    console.log("Rest parameters:", args);
}
restExample(1, 2, 3, 4); // Output: Rest parameters: [1, 2, 3, 4]

function argumentsExample() {
    console.log("Arguments object:", arguments);
}
argumentsExample(1, 2, 3, 4); // Output: Arguments object: [1, 2, 3, 4]

