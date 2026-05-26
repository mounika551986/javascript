document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission for validation

    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    let isValid = true;

    // Name validation
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
        document.getElementById("nameError").textContent = "Name must contain only letters.";
        isValid = false;
    }

    // Email validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        isValid = false;
    }

    // Password validation
    const password = document.getElementById("password").value;
    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
        isValid = false;
    } else if (!/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
        document.getElementById("passwordError").textContent = "Password must contain a number and a special character.";
        isValid = false;
    }

    // Confirm password validation
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        alert("Form submitted successfully!");
        // Here you can send data to server using fetch/AJAX
        document.getElementById("myForm").reset();
    }
});
// Create sample programs using different variable types.
// JavaScript Variable Types Demonstration

// 1. String

var a="mounika"
console.log(a,typeof a)

//number

const b=12
console.log(b,typeof b)

// boolean
let c=true
console.log(c,typeof c);
// undefined
var d=
console.log(d,typeof d)
//null

var e=null
console.log(e,typeof e)
// bigint

const f= 123456677n
console.log(f,typeof f)

//Practice all primitive data types with examples.

let name = "Alice";      // Double quotes
let city = 'London';     // Single quotes
let greeting = `Hello!`; // Backticks

let age = 25;
let price = 19.99;
let negative = -5;

let hugeNumber = 9007199254740991n;
let anotherBigInt = BigInt("123456789");

let isLoggedIn = true;
let isPaymentComplete = false;

let score;
console.log(score); // Output: undefined

let currentUser = null; // User is logged out, so the value is empty

let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // Output: false


//TYPES OF OPERATORS

console.log(typeof "Hello");  
console.log(typeof true);     
console.log(typeof null);     


//Create programs demonstrating datatype usage.
// 1. String: Textual data enclosed in quotes
let username = "DevUser7"; 

// 2. Number: Integers or floating-point decimals
let age1 = 25;
let pi = 3.14;

// 3. BigInt: For integers larger than the standard Number limit
let largeId = 9007199254740991n;

// 4. Boolean: Logical values: true or false
let isOnline = true;

// 5. Undefined: A variable that has been declared but not assigned a value
let connectionStatus;

// 6. Null: Intentional absence of any object value
let lastLogin = null;
// 7. Symbol: Unique and immutable identifier
let uniqueKey = Symbol("id");


// DEMONSTRATION OUTPUT

console.log(username,typeof username)
console.log(age,typeof age1)
console.log(pi,typeof pi)
console.log(largeId,typeof largeId)
console.log(isOnline,typeof isOnline)
console.log(connectionStatus)
console.log(lastLogin,typeof lastLogin)
console.log(uniqueKey,typeof uniqueKey)

//Perform datatype checking and console outputs.

let mydata =500
console.log(mydata,typeof mydata)

if (typeof mydata ==="string"){
    console.warn("expected a string not a number")
}
// complex types checking
let fruits=["apple","banana"];
let user ={name:"mounika",age:23}
console.log((fruits))
console.log(typeof user);

// 3. Structured Console Outputs
console.error("This is an error message.");
console.warn("This is a warning message.");

// Displaying data as a table
console.table([
  { item: "Laptop", price: 80000 },
  { item: "Phone", price: 45000 }
]);

