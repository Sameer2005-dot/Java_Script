// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sameer",
    "fullname": "Sameer Jena",
    [mySym]: "myKey1",
    age: 20,
    location: "BBSR",
    email: "jena@cutm.ac.in",
    isLoggedIn: false,
    lastLoginDays: ["Saturday", "Sunday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
// console.log(JsUser[mySym]);

 JsUser.email = "Sameer@cutm.ac.in"
//  Object.freeze(JsUser)
 JsUser.email = "Sameer@chatgpt.com"
//  console.log(JsUser);
 

JsUser.greeting = function() {
    console.log("Hello JS User");   
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);   
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());