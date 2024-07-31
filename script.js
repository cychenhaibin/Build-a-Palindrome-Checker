'use strict'

// List all html element interaction
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultElm = document.getElementById("result");



// main function
checkBtn.addEventListener('click', () => {
    console.log("Main");
    let text = textInput.value;
    console.log(text);

    // Text is empy, azAZ09 or other
    // Test empty
    if (!text) {
        alert("Please input a value");
        return;
    }


    let result = text;
    result += isPalindrome(cleanText(text)) ? " is a palindrome." : " is not a palindrome.";
    addHtmlResult(result);
});

function reverseString(text) {
    if (typeof text !== "string") {
        console.log("[f] reverseString Error : text is not a string");
        return;
    }

    text = text.split("");
    text = text.reverse();
    return text.join("");
}

function isPalindrome(text) {
    console.log("isPalindorm");
    // Return bool
    text = text.toLowerCase();
    let txet = reverseString(text);
    return (text === txet)
}

function addHtmlResult(text) {
    console.log("result");
    let elmHtml = document.createElement("p")
    elmHtml.innerText = text;
    resultElm.innerHTML = "";
    resultElm.appendChild(elmHtml);
}

function cleanText(text) {
    if (!(typeof text === "string")) {
        console.log("[f] cleanText Error : text is not a string");
        return text;
    }

    return text.replaceAll(/[^a-zA-Z0-9]/g, "");
}


