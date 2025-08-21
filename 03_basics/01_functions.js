
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
console.log(loginUserMessage());
