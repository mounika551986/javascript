// synchronous programming will execute code line by line and wait for each line to finish before moving on to the next line. Asynchronous programming allows you to execute code without waiting for each line to finish, which can improve performance and responsiveness.

// synchronous programming
console.log("This is synchronous programming.");
console.log("This will be executed after the first line.");

//asynchronous programming will not wait for the previous line to finish before moving on to the next line. It allows you to execute code without blocking the main thread, which can improve performance and responsiveness.

console.log("This is asynchronous programming.");
function time() {
    console.log("This will be executed after 2 seconds.");
}
setTimeout(time, 2000);
console.log("This will be executed immediately after the first line, without waiting for the time function to finish.");


console.log('part 1');
setTimeout(() => {
    console.log('part 2');
}, 1000);
console.log('part 3');

//milliseconds
// 1 second = 1000 milliseconds
// setTimeout(() => {
//     console.log('This will be executed after 3 seconds.');
// }, 3000);

let sum =0;
for(let i=0; i<1000; i++) {
    sum += i;
}
console.log(sum);

//setInterval will execute the code repeatedly at specified intervals until it is stopped. It takes two arguments: a callback function and the interval time in milliseconds.

let a =setInterval(() => {
    console.log('four');
}, 1000);

//clearInterval will stop the execution of the code that was set to run repeatedly by setInterval. It takes one argument: the identifier returned by setInterval when it was called.

 setTimeout(() => {
    clearInterval(a);
}, 5000);

//hello world print 3 times 

for (let i=0; i<3; i++) {
    setTimeout(() => {
        console.log('Hello, World!');
    }, 1000);
}

//clearTimeout will stop the execution of the code that was set to run after a specified delay by setTimeout. It takes one argument: the identifier returned by setTimeout when it was called.

let timeoutId = setTimeout(() => {
    console.log('This will not be executed.');
}, 1000);
clearTimeout(timeoutId);

const btn = document.getElementById('jokeBtn');
const display = document.getElementById('jokeDisplay');
console.log(btn);
console.log(display);

btn.addEventListener('click', () => {
    display.innerText = 'Loading...';
    setTimeout(() => {
        display.innerText = 'Why don\'t scientists trust atoms? Because they make up everything!';
    }, 2000);
});

// using double click event listener
btn.addEventListener('dblclick', () => {
    setTimeout(() => {
        display.innerText = 'Why don\'t scientists trust atoms? Because they make up everything!';
    }, 2000);
});

let b = setInterval(() => {
    console.log('This will be executed every 2 seconds.');
}, 2000);

setTimeout(() => {
    clearInterval(b);
}, 1000);
console.log(b);




