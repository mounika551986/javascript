//promise

let MyPromise = new Promise((resolve,reject)=>{
    let condition =false;
    if(condition){
        resolve('promise resolved sucessfully');
    } else{
        reject('promise rejected');

    }
    });

MyPromise.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});

let myPromise = new Promise((resolve,reject)=>{
    let condition =true;
    if (condition){
        resolve( 'program sucess');
    } else{
        reject('program failed');
    }
    });
    myPromise.then((successMessage)=>{
        console.log(successMessage);
    }).catch((errorMessage)=>{
        console.log(errorMessage)
    });

    //callback functions

    function fetchData(callback){
        setTimeout(function(){
            let data = "Data fetched from server";
            callback(data);
        }, 2000);
    }
    fetchData(function(data){
        console.log(data);
    });
    
    // multiple callbacks
    function fetchData1(callback){
        setTimeout(function(){
            let data ="data fetched from server 1";
            callback (data);
        },2000);
        console.log("fetching data from server 1...");
    }
function fetchData2(callback){
    setInterval(function(){
        let data = "data fetched from server 2";
        callback(data);
    },2000);
    console.log("fetching data from server 2...");

}

// promise all will wait for all the promises to resolve and then return the result as an array

let ab = Promise.resolve ("promise 1 resolved");
let bc = Promise.reject ("promise 2 resolved");

Promise.all([ab,bc]).then((messages)=>{
    console.log(messages);
}).catch((error)=>{
    console.log(error);
});


// promise.race will return the result of the first promise that resolves or rejects

let Promise1 =new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("promise 1 resolved");
    }, 1000);
});

let Promise2 =new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("promise 2 resolved");
    }, 2000);
});

Promise.race([Promise1, Promise2]).then((message)=>{
    console.log(message);
});
Promise.race([Promise1,Promise2]).catch((error)=>{
    console.log(error);
});

// promise.allSettled will return the result of all the promises regardless of whether they are resolved or rejected

let Promise3=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("promise 3 resolved");
    },1000);
    })
let Promise4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("promise 4 rejected");
    },2000);
});
    Promise.allSettled([Promise3,Promise4]).then((results)=>{
        console.log(results);
    });
Promise.allSettled([Promise3,Promise4]).catch((error)=>{
    console.log(error);
});

//promise.any will return the result of the first promise that resolves and ignores the rejected promises
Promise.any([Promise3,Promise4]).then((message)=>{
    console.log(message);
}).catch((error)=>{
    consolelog(error);
});




