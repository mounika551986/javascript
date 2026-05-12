//objects

// objects data will be stored in key value pairs
//keys will be of strings
//key and value will be separated by :
// each key value pair will be separated by ,
// enclosed by curly bases{}

// related data

//let emp={
    // empname:'mounika'
    // emp_id :'952365'
    // role: "associate software"
    // address: "hyderabad"
    // salary: "20000"
    // dob: "11-may"

// 4 ways

//objectliteral way

let b={}
console.log(b)

//new keywords
let a = new Object()
console.log(a)


//objectliteral way

var obj ={one:"a", two: "hello", c:2};
console.log(obj)

obj.hello ="good morning"
console.log(obj)

console.log(obj.c)

delete obj.one
console.log(obj)

obj.rahul ="happy birthday"
console.log(obj)

delete obj.c
console.log(obj)

obj.one="mounika"
console.log(obj)

//constructor way
//class way

// Constructor function way
function Person (name,age){
    this.name=name;
    this.age=age;
    this.greet= function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let person1 = new Person("mounika",25);
console.log(person1.name);
console.log(person1.age);
person1.greet();

function Laptop (name,BroadcastChannel,price){
    this.name=name;
    this.BroadcastChannel=BroadcastChannel;
    this.price=price;
    this.details= function(){
        console.log(`The laptop name is ${this.name}, BroadcastChannel is ${this.BroadcastChannel} and price is ${this.price}`);
    }
}
let laptop1= new Laptop('dell', 'yes', 50000);
console.log(laptop1.name);
console.log(laptop1.BroadcastChannel);
console.log(laptop1.price);
laptop1.details();

//class way

class Emp{
    constructor (a,b,c){
        this.name =a;
        this.role = b;
        this.dept= c ;


    }
}
var m= new Emp('mounika','software engineer','IT')
console.log(m)

//copying of objects 3 ways
// Normal copy
//deep copy
//shallow copy

var obj={ a:'one', b: 'two', c:'three'}

console.log(obj)

// normal copy
var obj1=obj
console.log(obj1)

obj1.d='four'
console.log(obj1)
console.log(obj)
obj.a ="mounika"
console.log(obj)
console.log(obj1)

//shallow copy with the help of spread operator

var obj2={...obj}
obj2.e='hello'
console.log(obj2)
console.log(obj)

const original = {
  name: "Alice", 
  address: { city: "New York" } 
};

// Create a shallow copy

const shallowCopy = { ...original };

shallowCopy.name = "Bob";          // Only affects the copy
shallowCopy.address.city = "LA";   // Affects BOTH because they share the reference

console.log(original.name);         // "Alice"
console.log(original.address.city); // "LA" (Oops!)

var orignal = {one:'a', b:'two',c: 'three', obj:{a:'hello',b:'hai'}}
var copy={...orignal}
copy.name='hello';
copy .obj.a='good morning'
orignal.k="bye"
console.log("copy",copy)
console.log("orignal",orignal)
// primitive data types will not change and reference data types will change


// deep shallow with the help of JSON.parse and stringify orginal

var copy1 = JSON.parse (JSON.stringify(original))
console.log("copy",copy1)
copy1.one="bye"
console.log("orignal",orignal)
console.log("copy",copy1)


//copying of arrays

var arr =[922,923,924,925,[10,11,12]]


//normal copy

var copy= arr
//console.log(arr[4][0])
console.log("arr",arr)
console.log("copy",copy)

arr[1]="hello"
arr[0]=10
console.log("arr",arr)
console.log("copy",copy)

// shallow copy with the help of spread operator

var copy1=[...arr]
copy1[3]="rahul"
console.log("original",arr)
console.log("copy",copy1)

const user = {
  id: 101,
  details: { age: 25 }
};

// Create shallow copy  using empty object
const copy3 = Object.assign({}, user);

// 1. Primitives (strings, numbers) are safe
copy3.id = 999;
console.log(user.id); // 101 (Original is fine)

// 2. Objects (references) are NOT safe
copy3.details.age = 30;
console.log(user.details.age); // 30 (Original changed!)


// deep copy

var copy2 =JSON.parse(JSON.stringify(arr))

console.log(copy2)
copy2[4][0]='myra'
console.log(copy2)
console.log(arr)
// nested structure
const original1 = [{ id: 1 }, { id: 2 }, [3, 4]];

const deepCopy = structuredClone(original1);

// Modifying the nested object
deepCopy[0].id = 99;
// Modifying the nested array
deepCopy[2].push(5);

console.log(original1[0].id); // 1 (Safe!)
console.log(original1[2]);    // [3, 4] (Safe!)
































