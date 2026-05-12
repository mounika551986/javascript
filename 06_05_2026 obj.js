//objects
//object.keys
//object.values
//object.entities

//object.keys it returns the key names

const user = {
    name:"mounika" ,
    age :28 ,
    city : 'HYDERABAD'
};
const keys = Object.keys(user);
console.log(keys);

// by using counting

const fruits = {
    apples : 20 ,
    mangoes : 23,
    oranges :30 ,
    banana : 12
}
const keysarray = Object.keys(fruits);
const totalItems = keysarray.length;
console.log(keysarray)
console.log(totalItems);


// object. values  it returns the key values

const user1= {
    aeroplanes : 11,
    buses : 23,
    train : 12
}

const valuesarray1 =Object.values(user1);
console.log (valuesarray1);

const exhibit = {
  3: 'Ancient Vase',
  1: 'Golden Idol',
  'b': 'Bronze Statue',
  'a': 'Silver Coin'
};

console.log(Object.keys(exhibit));
console.log(Object.values(exhibit));

//object.entries we can see both treasure names and values by side by side

console.log(Object.entries(exhibit));


//date object uesd to work with date and times 

var a = new Date() // current time & date
console.log(a)  


var b= new Date ("2026-05-05")
console.log(b)



// Template string or literate  are modern way to create strings using backticks instead of single or double quotes

var Example= "dancing"

console.log(`i like to do ${Example}<br> <h1> happy to see you </h1>`)

var k =10
var i = 20
console.log(`the value of a is ${k} the value of i is ${i} and their sum is ${k+i}`)

console.log("the value of a is ${k} the value of i is ${i} and their sum is ${k+i}")

//math object is a static object that provides properties and methods  for mathematical constants and functions
 //common math methods allows to perform operations that on arithmetic operations (+-*/) cannot handle
 // math. round  nearest to the integers like 5.5 means 6 and 5.4 becomes 5
 //math ceil - always round off to the next integer 4.1 becomes 5
 // math.floor - always round down to the next integer 4.9 becomes 4
 // math .trunc simply removes the decimal part without rounding 4.9 becomes 4 

var ab =10
var bc= 10.2
console.log (Math.round(bc))
console.log(Math.ceil(bc))


console.log(Math.floor(bc))
console.log(Math.trunc(bc))
console.log(Math.sqrt(25))
var abc= [123,3333,543]
console.log(Math.max(...abc))
console.log(Math.min(...abc))
console.log(Math.pow(6,3))

console.log(Math.floor(Math.random()*10000))
                                                   
// how to generate random numbers for a certain range

function getRandomInt(min, max) {
  // Ensure we have integers to work with
  min = Math.ceil(min);
  max = Math.floor(max);
  // Scale by the range (+1 for inclusivity) and shift by min
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(5, 10)); // Returns 5, 6, 7, 8, 9, or 10

// Decimals
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomFloat(1.5, 5.5)); // e.g., 3.429...


function getRandomFloat (min,max) {
return Math.random()* (max-min)+ min;

}
console.log(getRandomFloat( 10.5, 15.5))


// string
const greeting ="hello world"
console.log(greeting.length)
console.log(greeting.toLowerCase())
console.log(greeting.toUpperCase())

const user2 = {
  name: "Alice",
  role: "ADMIN",
  id: 101
};

const lowercasedUser2 = Object.fromEntries(
  Object.entries(user).map(([key, value]) => [
    key, 
    typeof value === 'string' ? value.toLowerCase() : value
  ])
);

console.log(lowercasedUser2); 


const UppercasedUser2 = Object.fromEntries(
  Object.entries(user2).map(([key, value]) => [
key,
    typeof value === 'string' ? value.toLowerCase() : value
  ])
);
console.log(UppercasedUser2);


let num = Math.trunc(Math.random()*100) +1;
console.log(num)







