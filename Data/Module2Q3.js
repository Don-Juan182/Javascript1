//Question1
const btn = document.querySelector(".btn");

    btn.addEventListener("click", function() {
        console.log("I'm a button");
});

//Question2
const input = document.querySelector("input");
const countButton = document.querySelector("form button");
const countOutput = document.querySelector("b.count");

function countCharacters() {
    const characterCount = input.value.trim().length;
    countOutput.innerHTML = characterCount;
}
countButton.addEventListener("click", countCharacters);


