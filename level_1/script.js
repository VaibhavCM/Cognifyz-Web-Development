// ========================================
// TASK 1: CHANGE BUTTON COLOR
// ========================================

const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", function () {

    if (colorButton.style.backgroundColor === "red") {

        // Change back to the original color
        colorButton.style.backgroundColor = "#24476b";

    } else {

        // Change the button to red
        colorButton.style.backgroundColor = "red";

    }

});


// ========================================
// TASK 2: GREETING BASED ON CURRENT TIME
// ========================================

const greetingButton = document.getElementById("greetingButton");

greetingButton.addEventListener("click", function () {

    // Get the current hour
    const currentHour = new Date().getHours();

    let greeting;

    if (currentHour < 12) {

        greeting = "Good morning!";

    } else if (currentHour < 17) {

        greeting = "Good afternoon!";

    } else if (currentHour < 21) {

        greeting = "Good evening!";

    } else {

        greeting = "Good night!";

    }

    // Display the greeting
    alert(greeting);

});


// ========================================
// TASK 3: ADD TWO NUMBERS
// ========================================

const firstNumberInput = document.getElementById("firstNumber");

const secondNumberInput = document.getElementById("secondNumber");

const addButton = document.getElementById("addButton");

const result = document.getElementById("result");


addButton.addEventListener("click", function () {

    // Get the values entered by the user
    const firstValue = firstNumberInput.value.trim();

    const secondValue = secondNumberInput.value.trim();

    // Check whether both inputs have values
    if (firstValue === "" || secondValue === "") {

        result.textContent = "Please enter both numbers.";

        return;

    }

    // Convert strings into numbers
    const num1 = Number(firstValue);

    const num2 = Number(secondValue);

    // Validate the numbers
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {

        result.textContent = "Please enter valid numbers.";

        return;

    }

    // Add the numbers
    const sum = num1 + num2;

    // Display the answer
    result.textContent = "Result: " + sum;

});


// ========================================
// OPTIONAL: CONTACT FORM INTERACTION
// ========================================

const contactForm = document.getElementById("contactForm");

const visitorNameInput = document.getElementById("visitorName");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    // Prevent the page from reloading
    event.preventDefault();

    const visitorName = visitorNameInput.value.trim();

    if (visitorName === "") {

        formMessage.textContent = "Please enter your name.";

        return;

    }

    // Display a personalized message
    formMessage.textContent = "Thank you, " + visitorName + "!";

});