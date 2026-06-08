// ARRAYS In JavaScript, an array is a global object used to store an ordered collection of multiple values under a single variable name

//Create and initialize arrays with different data types in js
//Prmitive data types
// string Array

const StringArray = ["apple", "mango", "grapes"]

console.log(StringArray, typeof (StringArray))

const NumberArray = [1, 2, 3, 4]
console.log(NumberArray, typeof (NumberArray))

const BooleanArray = [true, false]
console.log(BooleanArray)

//null
const NullArray = [null]
console.log(NullArray)
// undefined

const UndefinedArray = []
console.log(UndefinedArray)

const BigIntArray = [9000000123n, 123n]
console.log(BigIntArray)

//const symbolArray=[symbol("id"),symbol("key")]
//console.log(symbolArray)

//array of objects

const objectArray = [{ name: "mounika", city: "hyderabad" }]
console.log(objectArray)

//multidimensional arrays
const matrixArray = [[1, 2, 3], [4, 5, 6]]
console.log(matrixArray)

//function array
const functionArray = [() => "hello",
(name) => `goodbye ${name}`
];

// multidimensional arrays

let board = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['o', 'o', 'x']
];
console.log(board[0][1])
console.log(board[2], [2])
//Multidimensional (Nested) Arrays
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Access the second sub-array, then its third element (number 6)
console.log(matrix[1][2]); // Output: 6

//Access array elements using indexes.

let fruits = ["apples", "mango", "grapes"]
//access the first element 0
console.log(fruits[0])
console.log(fruits[1])
//accessing the last element dynamically
console.log(fruits[fruits.length - 1])

const tools = ['Hammer', 'Screwdriver', 'Wrench'];

// Positive index works like normal bracket notation
console.log(tools.at(1)); // Output: 'Screwdriver'

// Negative index counts from the back (-1 is the last item)
console.log(tools.at(-1)); // Output: 'Wrench'
console.log(tools.at(-2)); // Output: 'Screwdriver'

//adding elements and removing elements

//push(): Adds one or more elements to the end of an array.

let bowl = ["mango", "banana"]
bowl.push("grapes")
console.log(bowl)
//unshift(): Adds one or more elements to the beginning of an array.
bowl.unshift("apple")
console.log(bowl)
let num = [1, 3, 4]
num.push(5, 6, 7)
console.log(num)

//pop(): Removes and returns the last element.
let fruit = ["guava", "dragon", "pear", "sapota"]
fruit.pop()
console.log(fruit)

//shift(): Removes and returns the first element.
fruit.shift()
console.log(fruit)

// splice To add elements at any position in a JavaScript array without removing existing ones, use the Array.prototype.splice()

//Insert One Element in the Middle

const frts = ["apple", "banana", "grapes"]
frts.splice(2, 0, "cherry")

frts.splice(1, 0, "berry")
console.log(frts)

//remove elements middle using splice
const sum = [1, 2, 3, 4, 5, 6]
sum.splice(2, 2)
console.log(sum)

//length of an array using the length property

const goods = ["chips", "lays", "sugary", "items"]
console.log(goods.length)

const nims = [1, 2, 3, 4, 5, 6]
console.log(nims.length)

//Search elements using includes().

const healthy = ["banana", "mango", "grapes"]
console.log(healthy.includes("banana"))
console.log(healthy.includes("apple"))


const hum = [1, 3, 4, 5, 6, 7]
console.log(hum.includes(2))
console.log(hum.includes(3))

//Find positions using indexOf() and lastIndexOf().

const fruits1 = ["apple", "banana", "orange", "apple", "mango"];

// 1. Find the first index
const firstApple = fruits1.indexOf("apple");
console.log(firstApple)
// Returns 0

// 2. Find the last index
const lastApple = fruits1.lastIndexOf("apple");
console.log(lastApple)
// Returns 3

const Sums = [1, 2, 3, 3, 2, 4, 2, 1]
const first2 = Sums.indexOf(2, 3)
console.log(first2)

const last2 = Sums.lastIndexOf(2, 2)
console.log(last2)
const letters = ["a", "b", "c", "b", "d", "b"];

// Search forward starting after index 1
console.log(letters.indexOf("b", 2));
// Returns 3

// Search backward starting from index 4
console.log(letters.lastIndexOf("b", 4));
// Returns 3 (skips the 'b' at index 5)

const str = [`Hello from world javascript! Hello, world!`]
console.log(str.indexOf("w", 6))
console.log(str.lastIndexOf("w", 2))

const string1 = "Hello world, hello!";
console.log(string1.lastIndexOf("hello"))
console.log(string1.lastIndexOf("world"));
console.log(string1.indexOf("Hello"));
console.log(string1.indexOf("world"));

//Make arrays empty using different approaches.
let arr = [1, 2, 3, 4]
let reference = arr
arr = [];
console.log(arr)
console.log(reference)

//2. Setting the length Property to 0
let arr1 = [1, 2, 3, 4]
let reference1 = arr1
arr1.length = 0
console.log(arr1)
console.log(reference1)

const arr2 = [1, 2, 3]
const reference2 = arr2.splice(0)
console.log(arr2)
console.log(reference2)
// Combine multiple arrays using concat() and the spread operator (...).
var number1 = [1, 2, 3]
var number2 = [4, 5, 6]
var number3 = [7, 8, 9]
var allNumbers = number1.concat(number2, number3)
console.log(allNumbers)

let array1 = ["apple", "mango", "banana"]
let array2 = ["tomato", "potato", "carrot"]
let array3 = ["egg", "fish", "chicken"]
let combinedArrays = [...array1, ...array2, ...array3];
console.log(combinedArrays)
let combined1 = [array1.concat(array2, array3)]
console.log(combined1)

//5. Array Iteration

const tool = ['Git', 'Docker', 'NPM'];

for (let i = 0; i < tool.length; i++) {
    console.log(`Index ${i}: ${tool[i]}`);
}
//for ... of loop
const tools1 = ['Git', 'Docker', 'NPM'];

for (const tool of tools1) {
    console.log(tool);
}

// for each

const tools2 = ['Git', 'Docker', 'NPM'];

tools2.forEach((tool, index) => {
    console.log(`Index ${index}: ${tool}`);
});

// for loop

let tax = ["house", "rent", "parking"]
for (let i = 0; i < tax.length; i++) {

    console.log(`Index ${i}: ${tax[i]}`);

}

const frameWork = ['react', 'python', 'html', "java"]
for (let i = 0; i < frameWork.length; i++) {
    console.log(`Index ${i}: ${frameWork[i]}`)

}
// for ...ofloop
const drumList = ['piano', 'flute', 'guitar']
for (const drum of drumList) {
    console.log(drum)
}
const frameworkList = ['React', 'Vue', 'Angular'];

for (const framework of frameworkList) {
    console.log(framework);
}
for (const [index, framework] of frameworkList.entries()) {
  console.log(`${index}: ${framework}`);
}

//for each

frameworkList.forEach((framework, index) => {
  console.log(`Index ${index}: ${framework}`);
});


