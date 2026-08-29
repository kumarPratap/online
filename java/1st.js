// This is a comment - it explains what the code does
// Comments are very important for learning!

// 1. VARIABLES - storing data
let myName = "Pratap Kumar"; // Change this to your name!
let age = 26; // Change this to your age
let isLearningJavaScript = true; // true or false (boolean)

// 2. CONSOLE LOG - see output in browser console (F12 → Console)
console.log("=== My First JavaScript Program ===");
console.log("Name:", myName);
console.log("Age:", age);
console.log("Am I learning?", isLearningJavaScript);

// 3. FUNCTIONS - reusable blocks of code

//Function Defined here

function sayHello() {
    console.log("Hello! Welcome to JavaScript!");
}
//function Called here
sayHello();

// 4. SIMPLE CALCULATOR FUNCTION
function addNumbers(a, b) {
    let result = a + b;
    console.log(a + " + " + b + " = " + result);
    return result; // sends the result back
}

// Test the function
addNumbers(9, 32);
addNumbers(471, 982);

// 5. INTERACT WITH HTML - change page content
function updatePage() {
    // Find the heading element
    let heading = document.querySelector('h1');

    // Change its text
    heading.textContent = "I am learning JavaScript! 🚀";

    // Change its color
    heading.style.color = "red";

    console.log("Page updated!");
}
updatePage();

// 6. BUTTON CLICK EVENT
function setupButton() {
    // Find the button
    let button = document.querySelector('button');

    // What happens when button is clicked
    button.addEventListener('click', function () {
        //craete a new text for Hello frinds
        let message = document.createElement('div');
        message.textContent = "Hello friend";
        document.body.appendChild(message)

        console.log("Button was clicked!");
        console.log("Hello! friend!");

        // Change button text
        button.textContent = "I clicked it! ✓";

        // Change button style
        button.style.background = "green";
        button.style.color = "white";
    });
}
// setupButton(); // (Commented out so it doesn't conflict with the button logic below)

// 7. ARRAY - list of items

let fruits = ["apple", "banana", "orange", "grape"];
console.log("My favorite fruits:", fruits);

// Add a new fruit
fruits.push("mango");
console.log("After adding mango:", fruits);

// 8. LOOPS - repeat actions
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// // 9. SIMPLE ANIMATION - change text every second
// let counter = 0;
// const timer = setInterval(function () {
//     counter++;
//     console.log("Seconds passed:", counter);

//     // Stop after 5 seconds
//     if (counter >= 5) {
//         console.log("Practice session complete! Good job!");
//         clearInterval(timer);
//         console.log("Stopped!");
//     }

// }, 1000); // 1000 milliseconds = 1 second

// // 10. FINAL MESSAGE
// console.log("%cCongratulations! You just ran your first JavaScript practice.", 
//             "color: green; font-size: 16px; font-weight: bold;");


//function is Even(number)

let myNumber = 7;
let result = myNumber % 2;

if (result === 0) {
    console.log("It is Even");
}
else { console.log("It is Odd") };

// Find the largest 

let firstNumber = 9;
let secondNumber = 5;
let thirdNumber = 39;
if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log("FirstNumber is largest number");
}

else if (secondNumber > thirdNumber && secondNumber > firstNumber) {
    console.log("Second Number is largest number");
}
else {
    console.log("Third Number is largest number");
}

// Check whether a number is positive, negative, or zero.

let entereNumber = -9;

if (entereNumber > 0) {
    console.log("Number is Positive");
}
else if (entereNumber < 0) {
    console.log("Number is Negative");

}
else {
    console.log("Number is Zero");
}
//DOM Change Header of this html page abd change color of h3

let myHeading = document.querySelector('h3');
myHeading.textContent = "I have learned C language, HTML and CSS";
myHeading.style.color = "green";


// ==========================================
// 10. SINGLE BUTTON: TOGGLE HEADING & COUNT CLICKS
// ==========================================

const myHeader = document.querySelector('h1');
const button = document.getElementById('actionBtn');
const countDisplay = document.getElementById('click-count');

// Initialize click counter variable
let clickCount = 0;

// One button click triggers both actions cleanly
button.addEventListener('click', function () {
    // 1. Toggle heading visibility (hide if shown, show if hidden)
    myHeader.style.display = (myHeader.style.display === "none") ? "block" : "none";

    // 2. Increment the click count
    clickCount++;

    // 3. Update the text on the web page
    countDisplay.textContent = `Button clicked ${clickCount} times`;

    // 4. Log to console for debugging
    console.log(`Button clicked! Total clicks: ${clickCount}`);
    // Change heading color
    myHeader.style.color = "blue";
});

// ==========================================
// 11. DARK MODE BUTTON
// ==========================================

const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', function () {
    // 1. Toggle dark mode class on body
    document.body.classList.toggle('dark-mode');

    // 2. Update button label depending on current mode
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});

// ==========================================
// 12. DOM = Document Object Model Practice
// ==========================================
// Tasks:
// 1. Select the <h1> using getElementById().
// 2. Print its text to the console.
// 3. Select all paragraphs using querySelectorAll().
// 4. Print each paragraph's text using forEach().
// 5. Change the color of every paragraph to green.

let myText = document.getElementById('h1');
myText.textContent;
console.log(h1);

let mine = document.getElementById("title");
console.log('mine');

// Exercise 1
 ÷<h1 id="heading">Hello</h1>
//  Select it.
// Print only its text.
// Change the text to "Hi".
// Change the color to "blue".
let myHeading = document.getElementById(heading);
console.log (myHeading.textcontent);
myHeading.textcontent = "Hi";
myHeading.style.color ="blue";
// comment
// <p class="city">Delhi</p>
// <p class="city">Mumbai</p>
// <p class="city">Hyderabad</p>
// thiss

// Select all paragraphs.
// Print each city's name.
// Change every paragraph color to "purple".

let myParagraphs = document.getElementsByClassName(".class");
myParagraphs.forEach (currentParagraph => {  
console.log (currentParagraph.textcontent);
currentParagraph.style.color = "purple";

 });

// Exercise 3

 let colors = ["Red", "Green", "Blue"];

//   Print each color using forEach().

colors.forEach ( myColor => {
    myColor.style.color = ("[colors[0]");
}

);
