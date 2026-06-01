//loops will repeat a block of code as long as a specified condition is true. There are several types of loops in JavaScript, including for, while, do...while, for...in, and for...of loops.
//for loop will run a block of code a number of times
//for (initialization; condition; increment/decrement) {code to be executed}
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while loop will run a block of code as long as a specified condition is true
//while (condition) {code to be executed}
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//do...while loop will run a block of code at least once, and then repeat the loop as long as a specified condition is true
//do {code to be executed} while (condition);
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);

//for...in loop will iterate over the properties of an object
//for (variable in object) {code to be executed}
const person = {name: "John", age: 30, city: "New York"};
for (let key in person) {
    console.log(key + ": " + person[key]);
}
//for...of loop will iterate over the values of an iterable object (like an array)
//for (variable of iterable) {code to be executed}
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
}

//infinite loops will run indefinitely until the condition is no longer true or the loop is manually stopped. 
//It is important to ensure that the condition in a loop will eventually become false to avoid creating an infinite loop.
// For example, the following code will create an infinite loop:
// while (true) {
//     console.log("This will run forever!");
// }
// To avoid this, make sure to include a condition that will eventually become false, 
// or use a break statement to exit the loop when a certain condition is met.
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

//practice problems
//1. Write a for loop that prints the numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    if(i ===3 || i === 7){  
        continue;
    }
    console.log(i);

}
for (let count=1; count <=10;count++){
    console.log(count);
    if(count >=3 && count<=7){
        continue;
    }
    console.log(count);
}
//2. Write a while loop that prints the even numbers from 0 to 20.
let even= 0;
while (even <= 20) {
console.log(even);
even +=2;
}
//3. Write a do...while loop that prints the numbers from 1 to 5.
let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);

// for ....in loop

const fruits={a:"apple",b:"banana",c:"cherry"};
for(let key in fruits){
    console.log(key + ": " + fruits[key]);
}

//for ...of loop
let colors =["red","green","blue"];
for(let color of colors){
    console.log(color);
}


