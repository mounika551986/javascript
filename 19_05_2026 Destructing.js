// sync and await will worrk only with promises

// async function getData(){
//     let response =await fetch ("https://jsonplaceholder.typicode.com/posts");
//     let data = await response.json();
//     return data;
// }
// getData().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// });


function hai(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("promise resolved");
        },2000);
    });
}
async function hello(){
    return await hai();
}
let s= hello();
console.log(s);


// destructuring will work with arrays and objects
// for in we use for objects and for of we use for arrays
// for in returns the index and for of returns the value

let a =[1,2,3,4,5];
let [A,B,C,D]=a;
console.log(A,B,C,D);

let obj={name:"mounika", age:25, city:"hyderabad"};

let {name,age,city}=obj;
console.log(name);

var m= obj.age;
console.log(m);

// iteration will work with arrays and objects
//Symbol.iterator is a built in symbol that is used to define the default iterator for an object

//iterators and generators are used to iterate over a collection of data
// iterators are objects that have a next method() that returns an object with two properties: values and done
// generators are functions that can be paused and resumed and they return an iterator

// iterators
let arr=[1,2,3];
let iterator =arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//generators
let generator =function*(){
    yield "myra";
    yield "rahul";
    yield "mounika";
}
let gen =generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

for(let value of generator()){
    console.log(value);
}

// task
// how to nested the values of arrays and objects using destucturing
let arr1=[1,2,[3,4],5];
let [a1,a2,[a3,a4],a5]=arr1;
console.log(a3,a5);

let obj1={name1:"mounika" ,dept: "it",location:{"hyd": "hyderabad"}, age1:25};
let {name1,age1,location:{hyd},dept}=obj1;
console.log(name1,age1,hyd,dept);

// combining arrays and objects using destructoring

let response ={
    list:[
        {id : 1,title: "first item"},
        {id : 2, title: "second item"}

    ]
};
let {list:[{title }]}=response; // extracting the title from the first object in the list array
console.log(title);











