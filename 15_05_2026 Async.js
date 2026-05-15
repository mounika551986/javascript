// Asynchronous

//normal Event- Normal Event (No optimization): The handler runs every single time the event fires (e.g., hundreds of times during a single mouse movement or scroll

//throttling - Throttling: Guarantees a function runs at regular intervals (e.g., "run this at most once every 100ms

//Debouncing: Ensures a function runs only after the event has stopped firing for a specified time (e.g., "run this only after the user stops typing for 300ms

// normal event

let button =document.getElementById("button") 

let a =0
let b =0
button.addEventListener("click", function (){

    a+=1;
    console.log(a);
console.log("button clicked");

});

//throttling will only run the function once every 2 seconds, even if the user clicks multiple times within that period
let lastclick =0;

button.addEventListener("click", function (){
    let now = new Date().getTime();
    if (now - lastclick > 2000){
    b+=1;
    console.log("value of B is:",b);
        lastclick = now;
        console.log("button clicked");
    }
});

//debouncing will only run the function after the user has stopped clicking for 2 seconds

let timeoutId;

button.addEventListener("click", function (){
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function (){
        console.log("button clicked");
    }, 2000);
});

// callback function

function fetchData(callback){
    setTimeout(function (){
        let data = "Data fetched from server";
        callback(data);
    }, 2000);
}

fetchData(function (data){
    console.log(data);
});


function function1(s){

    console.log(s)

}
function one(a,b,c){
    console.log("one is exexcuted")
    c=a+b;
}
one(1,2, function1);
//throttling
let button1=document.getElementById('button1');
button1.addEventListener("click",function(){
    console.log("sending email");
});

let count =0;
let apicalled;
const throttle=(fn,time)=>{
    if(apicalled) return;
    apicalled=true;
    setTimeout(()=>{
        fn();
        apicalled=false;
    },time);
}
const sendEmail=()=>{
    throttle(()=>{
        console.log("email sent",++count)
    },2000)
}
button1.addEventListener("click",sendEmail)

const btn = document.querySelector('#throttleBtn');
const statusText = document.querySelector('#status');

// The function we want to throttle
const handleClick = () => {
  statusText.innerText = "Fired! Waiting for cooldown...";
  console.log("Action performed!");
  
  // Reset text after a brief moment to show it can fire again
  setTimeout(() => {
    statusText.innerText = "Ready again";
  }, 2000);
};

// Wrap the function with throttle (2-second delay)
const throttledClick = throttle(handleClick, 2000);

btn.addEventListener('click', throttledClick);
// script.js
const searchInput = document.getElementById('search');
const outputDisplay = document.getElementById('output');

// The Debounce Function
function debounce(func, delay) {
  let timer;
  return function(...args) {
    // Clear the previous timer if the function is called again 
    // within the delay period
    clearTimeout(timer);
    
    // Set a new timer
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// The function we want to "debounce" (e.g., a search request)
function handleSearch(event) {
  outputDisplay.textContent = `Searching for: "${event.target.value}"`;
  console.log("API Request sent for:", event.target.value);
}

// Wrap the handler in the debounce function with a 500ms delay
const debouncedSearch = debounce(handleSearch, 500);

// Attach the debounced function to the 'input' event
searchInput.addEventListener('input', debouncedSearch);

//promise will run the function after the user has stopped clicking for 2 seconds

const myPromise =new Promise((resolve,reject)=>{
    const success =true
    if(success){
        resolve("Promise resolved successfully");
    }else{
        reject("Promise rejected");
    }

});

myPromise.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});

Promise.all([
    new Promise((resolve)=> setTimeout(() => resolve("First promise resolved"), 1000)),
    new Promise((resolve)=> setTimeout(() => resolve("Second promise resolved"), 2000)),
    new Promise((resolve)=> setTimeout(() => resolve("Third promise resolved"),1500)),
]).then((messages)=>{
    console.log(messages);
}).catch((error)=>{
    console.log(error);
}
);

// multiple callbacks
function fetchData1(callback){
    setTimeout(function (){
        let data = "Data fetched from server 1";
        callback(data);
    }, 2000);
}
function fetchData2(callback){
    setTimeout(function (){
        let data = "Data fetched from server 2";
        callback(data);
    }, 2000);
}
function fetchData3(callback){
    setTimeout(function (){
        let data = "Data fetched from server 3";
        callback(data);
    }, 2000);
}

fetchData1(function(data1){
    console.log(data1);
    fetchData2(function(data2){
        console.log(data2);
        fetchData3(function(data3){
            console.log(data3);
        });
    });
});















    






