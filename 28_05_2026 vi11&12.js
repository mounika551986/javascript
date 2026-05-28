// operators it is used to perform operations on data types

// Arithmatic operators is used to perform mathematical operations
//+-* /%++,--

//addition
var a =10
var b=2
console.log(a+b)
console.log(a-b)
console.log(a/b)  //quotient
console.log(a%b) // remainder

// increment operator
console.log(a) //10
// pre increment
console.log(++a) //11 // functionality jaraga munde value update avtadi
//post increment
console.log(a++) //11
console.log(a) //12

//decrement operator
console.log(b)
//pre drecrement
console.log(--b)
//post decrement
console.log(b--)
console.log(b)
//exponent operator
var A =4
var B =3
console.log(A**B)

// ASSIGNMENT operator right side value equals to the left side variable
//+=,-= it is called shortend operators

var c=3
var d=2
var e=c+d
d+=c
console.log(c)
console.log(d)
console.log(e)

c-=d
console.log(c)

e/=c
console.log(e)

//comparion operators is used to compare 2 values result will be a boolean value (true or false value )
// <,> <=,>=
// == loose equality
// == strict equality
//!==loose inequality (output true means it will change to false)
//!== strict inequality

var a=10
var b=8
var c=10
console.log(a<b)
console.log(a>b)
console.log(a<=b)
console.log(a>=b)

var d=10
var e=10
console.log("loos equality",d==e)
console.log("loose inequality",d!=e)
console.log("srtict euality",d===e)
console.log("strict inequality",d!==e)


//after 18
let age =10
console.log(age>18)
console.log(age<18)

//logical operators and or not
// And (&&) if both the conditions are true then the reult will be true
// OR (||)if any one condition true then the result will be true
// Not (!) if condition is true then the result will be false

console.log ((2<4) &&(2>4))
console.log((2>4) ||(2<4))
console.log(!(2<4))

//ternary operator that takes three operands, acting as a shortcut for if-else statement
//syntax condition?true: false:
let salary =40000
salary>10000?console.log("apply for the credit card"):console.log("not eligible for the credit card")


//string literal

let str1 = "Hello", str2 = "World", str3 ="good"
console.log(str1 + " " + str2 +"" +str3); // Concatenation


// operator precedence
// Execution Flow with Examples
// Mixing Multiplication  and addition

let result = 5 + 3 * 2; //Execution Flow: * has a higher precedence than +.

console.log(result); // Output: 11


//Mixed Logical Operators with Strict Equality

let result1 = true || false === false;
console.log(result1)

let x = 5;
let result2 = ++x + x++;

console.log(x)

//template literals are string literals are enclosed by back ticks characters instead of single or double quotes

const name ="arun"
const price="500"
const tax =0.1

console.log(`hello ${name},total is${price *(1+tax)}`);
//create dynamic string formatting examples in javascript

let name1="rahul"
let price1=600;
let tax1 =2.0
console.log(`hello ${name1},total is${price1*(tax1)}`)

let user3="mounika"
let status="online"
let message=(`my ${user3} is currently ${status}`)
console.log(message)

// mathematical
const itemPrice = 49.99;
const taxRate = 0.08;

const totalBill = `Total: $${(itemPrice * (1 + taxRate)).toFixed(2)}`;
console.log(totalBill); 

//Practice embedding variables inside template literals.

const framework = "React";
const version = 19;

const moderway=(`I am learning ${framework} version${version}`)
console.log(moderway)



