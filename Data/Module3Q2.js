//Question1

function greet(name = "John") {
    return `Hello ${name}!`;
}

greet();

//Question2


//Question3

const url ="https://api.noroff.dev/api/v1/cat-facts";
const resultContainer = document.querySelector(".content");

async function getFact() {

    try {

    const response = await fetch("url");
    const results = await response.json();
    console.log(results[8].text);

    resultContainer.innerHTML = "";

}
} catch (error) {
    console.log("An error occurred");
    resultContainer.innerHTML = displayError();
}

getFact();



