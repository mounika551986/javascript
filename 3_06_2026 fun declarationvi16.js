// function declaration is a way to define a function using the function keyword, followed by the function name and parentheses. The function body is enclosed in curly braces.
// function declaration is hoisted, which means it can be called before it is defined in the code.
function add(a,b){
    return a+b;
}
console.log(add(2,3));


function multiply(x,y){
    return x*y;
    
}
console.log(multiply(2,3));


function name(converttouppercase){
    return converttouppercase.toUpperCase();
}
console.log(name("hello"));

function name1(converttoLowercase){
    return converttoLowercase.toLowerCase();

}
console.log(name1("HAI"));

function name2(string){
    return string.length;
}
console.log(name2("mounika"));

function name3(string){


return string.split("");
}
console.log(name3("mounika"));

function name4(string){
    return string.split("").reverse().join("");

}
console.log(name4("mounika"));

function name5(string){
    return string.includes("a")
}
console.log(name5("mounika"));

function name6(string){
    return string .length ;
    
}
console.log(name6("rahul"));

function name7(string){
    return string.split("")
}
console.log(name7("rahul"));


