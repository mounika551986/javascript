//arrays
//shift removes the first element and returns it first
let numbers= [10,12,14,16,18,20,]
numbers.shift(); // removes 10
numbers.shift();//removes 12
numbers.shift();//removes 14
console.log(numbers)

//unshift add elements to the begining of an array

let num = [6,8,9]
num.unshift(1,2);
num.unshift(3,4);
console.log(num)

//splice
const fruits= ["banana","apple","grapes","mango"];
const removed= fruits.splice(3,1);
console.log(fruits);
console.log(removed);

const colors=["blue","red"];
colors.splice(1,0,"yellow","orange") // adding
console.log(colors);

const months =['jan','march','apr']; // replacing
months.splice(1,0,'feb');
console.log(months);

// length of an array is nothing but length property 
// it automatically updates whenever elements are added or removed

const vegetables=['onion','tomato','potato','carrot']
console.log(vegetables.length)



// indexof is used to find the index of a particular element in a array

let sum= [100,26,2,3]
console.log(sum[1])
console.log(sum.indexOf(100))
console.log (sum)
console.log(sum.indexOf(0))

// indexOf index value or -1
// it is used to find the index of a particular element in a array
//if the value is not present then it will return -1
//includes true or false

console.log(sum[1])
console.log(sum.includes(100))
console.log(sum.includes(0))

//lastIndexOf is used to find the last occurence of specific value within the string of a array
// it searches the data end to begining

const healthyfruits= ['orange','apple','banana','grapes']
console.log(healthyfruits.lastIndexOf('grapes'));
console.log(healthyfruits.lastIndexOf('orange'));

let num1=[100,11,2,2]
console.log(num1)
console.log(num1.length)
// splice
num1.splice(0,num1.length)
console.log(num1)
// Assign empty ARRAY - involves three primary tasks creating,clearing existing ones and checking if an array is empty
//array literal
 
let arr=[]
console.log(arr)
//array constructor
//let arr1=new array()
//console.log(arr1)


//combining two arrays
//concat


var c=[1,2,3,4]
var d=['anu','balu','sonu','janu']
console.log(c,d)
var e= c.concat(d)
console.log(e)


//split operator array (rest)
var f= [...c,...d]
console.log(f)


for (k of f){
    console.log(k)
}
let i= [1,2,3,4,5]
for (i in arr) {
    arr[i]=arr[i]+1
}
console.log(i)

for (i of arr){
    console.log(i)
}
//testing array
//some and every//result will come in boolean values
//some any one condition true
//every all conditions statisfy
console.log(arr.some(i=>i>3))

console.log(arr.every(i=>i>4))

//join
console.log(i.join (' '))

//sort

let arr7=[1,10,3,2,1,3,2,20,10]
arr7.sort()
console.log(arr7)
arr7.sort((a,b)=>a-b)
console.log(arr7)



//flattening of array

