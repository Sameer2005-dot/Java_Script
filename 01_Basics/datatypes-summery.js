// Primitives datatypes

// 7 Types : String, Number, Boolean, null, Undefined, Symbol, bigInt 

let Name = "Sameer"

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

let EmailId;

const Id = Symbol('123')
const anotherId = Symbol('123')
// console.log(Id == anotherId);  // It is false

const bigNum = 54887848454845n


// Reference OR Non-Primitive datatypes //

// Array, Objects, Functions

const heros = ["Sameer", "Biswajit", "Arpit"]

let myObj = {
    name : "Sameer",
    age : 20,
    gender : "male"
}

const myFunction = function(){
    console.log("Hello World!!");
}

console.log(typeof myFunction);

// Stirng => string
// Number => number
// Boolean => boolean
// null => object
// Undefined => undefined
// null => object
// Symbol => symbol
// bigInt => bigint

// Array => object
// Object => object
// FDunctions => function


// --------------------------Stack and Heap memory in JS--------------------------- //

// Stack (Primitive), Heap (Non-Primitive)

// In below define how to store primitive datatypes in stack memory
let myName = "SameerJena"

let anotherName = myName
anotherName = "JenaSameer"

console.log(myName);
console.log(anotherName);

// In below define how to store Non-Primitive datatypes in heap memory
let UserOne = {
    email : "user@gmail.com",
    upi : "user@axl"
}

let UserTwo = UserOne
UserTwo.email = "Sameer@gmail.com"

console.log(UserOne);
console.log(UserTwo);

