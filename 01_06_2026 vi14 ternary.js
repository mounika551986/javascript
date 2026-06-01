// ternary operator is a conditional operator that takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. 
// It is often used as a shorthand for an if-else statement.
// The syntax for the ternary operator is as follows:
// condition ? expressionIfTrue : expressionIfFalse;

let age=18;
let canVote = age >=18 ? "you can vote" : "you can not vote";
console.log(canVote);

let day = "one";
let result =day ==="one" ? "first day of the week" : "not the first day of the week";
console.log(result);
let day1 = "sunday";
let result1 = day1 === "sunday" ? "first sunday of the week" : "not the first day of the week";
console.log(result1);

//ternary operator can also be nested to handle multiple conditions.
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log(grade);

//const status = isOnline ? "Active" : "Offline";
//console.log(status);
//
//practice problems
//1. Write a ternary operator that checks if a number is even or odd and returns "Even" or "Odd" accordingly.
let number = 10;
let result2 = number % 2 === 0 ? "Even" : "Odd";
console.log(result2);
//2. Write a ternary operator that checks if a person is eligible to vote (age >= 18) and returns "Eligible" or "Not Eligible".
let age1 = 20;
let eligibility = age1 >= 18 ? "Eligible" : "Not Eligible";
console.log(eligibility);

//3. Write a ternary operator that checks if a string is empty and returns "Empty" or "Not Empty".
let str = "";
let result3 = str === "" ? "Empty" : "Not Empty";
console.log(result3);

// traditional if-else statement
let age2 = 17;
let canVote1;
if (age2 >= 18) {
  canVote1 = "You can vote";
} else {
  canVote1 = "You cannot vote";
}
console.log(canVote1);

