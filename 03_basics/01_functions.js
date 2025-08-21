
function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("E");
    console.log("E");
    console.log("R");
}

// sayMyName()

// Add two numbers by using function

// function addTwoNum(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNum(number1, number2) {
    let result = number1 + number2
    return result
}

const result = addTwoNum(4, 5)

// console.log("Result: ", result);


function loginUserMessage(userName = "Sam") {  //here "Sam" is use for default value and not going inside the if statement//
    if(!userName) {
        console.log("Plz Enter a user name!");
        return
    }
    return `${userName} now logged in`
}

// console.log(loginUserMessage("sameer"));
// console.log(loginUserMessage("SAMEER"));


function calculateCardPrice(val1, val2, ...num1) { //here val1 and val2 give some separate num
    return num1
}
// console.log(calculateCardPrice(200, 400, 500, 1000));


// by using object
const user = {
    userName: "Sameer",
    courseName: "JS"
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and the course name is ${anyObject.courseName}`);
}

handleObject(user)

// By using array

const myNewArray = [100, 500, 1000, 1500]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));        //OR

console.log(returnSecondValue([100, 500, 1000, 1500]));

