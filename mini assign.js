// Create a JavaScript program that demonstrates:

//Array creation

const arr=[1,2,3,4]
console.log(arr)

//using datatypes
const string=["mounika","hyderabad"]
console.log(string)
const boolean=[true,false]
console.log(boolean)
const bigInt=[12345n]
console.log(bigInt)
const objectArray=[{name:"sony",city:"hyd"}]
console.log(objectArray)
// Multidimensional arrays

const array=[[1,2,3],[4,5,6]]
console.log(array)

const multi=[
    [1,0,1],
    [0,0,1],
    [1,1,0]
]
console.log(multi[0][1])
console.log(multi[2][1])
console.log(multi[1][2])

//Adding and removing elements

const fruits=["banana","grapes"]
fruits.push("apple")
console.log(fruits)
fruits.unshift("apple")
console.log(fruits)

fruits.splice(1,0,"cherry")
console.log(fruits)

const letters=["a","b","d"]
letters.splice(2,0,"c")
console.log(letters)

const sums=[12,13,14,15]
const removed=sums.pop();
console.log(sums)

const removed1=sums.shift()
console.log(sums)

const sum=[12,13,14,15,16]
const removed2=sum.splice(1,2)
console.log(sum)

// Searching elements
let arr1=[1,2,3,4]
let reference=arr1;
arr1=[]
console.log(arr1)
console.log(reference)

console.log(arr1.length)

const arr2=[2,3,4,5]
console.log(arr2.includes(3))
console.log(arr2.includes(1))

const fruits1 = ["apple", "banana", "orange", "apple", "mango"];

// 1. Find the first index
const firstApple = fruits1.indexOf("apple");
console.log(firstApple)

const lastapple=fruits1.lastIndexOf("apple")
console.log(lastapple)


//Combining arrays

let sumy= [1,2,3,4]
let sum1=[5,6,7]
let sum2=[8,9,10]
console.log(sumy.concat(sum1,sum2))

console.log(...sumy,...sum1,...sum2)

//Array iteration techniques

let friends=["mounika","rahul","myra"]
for(i=0;i<friends.length;i++){
    console.log(`Index ${i}:${friends[i]}`)
}

//for...of loop
const tools1=["hammer","rod",'screw']
for(const tools of tools1){
    console.log(tools)
}

//for each
const tools2 = ['Git', 'Docker', 'NPM'];

tools2.forEach((tool, index) => {
    console.log(`Index ${index}: ${tool}`);
});
