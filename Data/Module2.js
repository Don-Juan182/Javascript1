//Question1
function receivingFunction(argument) {
    console.log("The argument is a " + typeof argument);

}
const myFunction = function() {
    console.log();

}

myFunction();

receivingFunction(myFunction);

function callbackFunction() {
    console.log("I am a callback function");

}

callbackFunction();

receivingFunction(callbackFunction);

//Question2
const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function(prize, index) {
    console.log(`Prize ${index + 1}: ${prize}`);
});

//Question3
const numberOfSeconds = 5;

function logMessage() {
    console.log(`I waited ${numberOfSeconds} seconds before executing`);
}

setTimeout(logMessage, numberOfSeconds * 1000);



setTimeout(function(){
    console.log("I waited 5 seconds before executing");

}, 5000);

//Question4
let count = 0;

const setIntervalQuestion4 = setInterval(function() {

count++;

if(count === 4) {
    clearInterval(setIntervalQuestion4);

}

console.log(count);
}, 1500);
