// Reference data types

// obj - it is enclosed with curly basis

var obj={name:"mounika",role:"associate",city:"hyderabad",salary:20000}
console.log(obj)

//arrays

var arr=[1,2,3,"hai","hello",true[1,2,3,4,null],{name:"mounika"}]
console.log(arr);


//function 

function hello(){
    console.log('hai','how are you!')
}
hello();
console.log("good")

function greet(user) {
    console.log(`Hello, ${user.name}!`);
}

let userObj = { name: "Bob" };
greet(userObj); // Hello, Bob!


//date

const today = new Date ()
console.log(today)

// reg Expression

let pattern = /hello/i; // Case-insensitive search
console.log(pattern.test("Hello World")); // true


//map
let userRoles = new Map();
userRoles.set("Alice", "Admin");
userRoles.set("Bob", "User",);
userRoles.set("mounika","user1");

console.log(userRoles.get("Alice")); // Admin
console.log(userRoles.size);         // 2

//set
let uniqueNumbers = new Set([1, 2, 2, 3,3,4,5,5]);
console.log(uniqueNumbers); // Set { 1, 2, 3 }

//practice session
//object

let car = { brand: "Toyota", year: 2020 };
let anotherCar = car; // Reference copy
anotherCar.year = 2025;
console.log("car:", car);           // { brand: 'Toyota', year: 2025 }
console.log("anotherCar:", anotherCar); // { brand: 'Toyota', year: 2025 }

//array

let colors=["red","green","blue"]
let moreColors=colors
 moreColors.push("yellow")
console.log("colors",colors);

//function name(params) {
    
function sayHello(){
    console.log("hello world")
}
 sayHello();

 //reg expression
 let regex=/javaScript/i;
 console.log((regex.test("i like javaScript")));

 //weak map

 
let userRoles1 = new Map();
userRoles1.set("Alice", "Admin");
userRoles1.set("Bob", "User");
console.log("Alice's role:", userRoles1.get("Alice")); // Admin


let uniqueNumbers1 = new Set([1, 2, 2, 3]);
console.log("Unique numbers1:", uniqueNumbers1); // Set { 1, 2, 3 }

// typeof operators

console.log(typeof car);
console.log(typeof arr );
console.log(typeof sayHello);
console.log(/regex/);
console.log(uniqueNumbers1);


//Javascript// Demonstrating typeof operator in JavaScript

// Primitive types
console.log(typeof "Hello World");   // string
console.log(typeof 42);              // number
console.log(typeof 3.14);            // number
console.log(typeof true);            // boolean
console.log(typeof undefined);       // undefined
console.log(typeof Symbol("id"));    // symbol
console.log(typeof 123n);            // bigint

// Special cases
console.log(typeof null);            // object (historical JavaScript quirk)
console.log(typeof NaN);             // number (NaN is still a number type)

// Objects and functions
console.log(typeof {});              // object
console.log(typeof []);              // object (arrays are objects)
console.log(typeof function(){});    // function
console.log(typeof new Date());      // object
console.log(typeof /regex/);         // object (RegExp)


//comparision between primitive and reference data types

//primitive data types

var a =10
var b=a

console.log(a)
console.log(b)

b=20;
console.log(a);
console.log(b);

// reference data types

let c={name:"alice"}
let d=c
console.log(c)
console.log(d)

d.name="memo";
console.log(c)
console.log(d)

let arr1=[1,2,3,4]
arr2=arr1
console.log(arr1)
console.log(arr2)


//calculation of salary based on working days
console.log(2000*20)
console.log(2000*19)
console.log(2000*18)

function salary(name,days){
    var perday=2000
    console.log("monthly salary of",name,"is",perday*days)
    console.log("execution completed")
    return perday
}
salary("mounika",10)
salary("myra",19)
salary("nirvi",18)

console.log("all the salaries are calculated");

