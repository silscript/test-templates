// Website loads all the necessary files and functions.
console.log("Website is ready.");

// Define all the variables.
var siteContent = document.querySelector(".site-content");
    console.log(siteContent);

var triviaQuestions = document.getElementById("trivia-question");
    console.log(triviaQuestions);

var triviaChoices = document.getElementById("trivia-choices");
    console.log(triviaChoices);

var triviaScore = document.getElementById("trivia-score");
    console.log(triviaScore);

var buttonSubmit = document.getElementById("trivia-submit");
    console.log(buttonSubmit);

// Create an json file of the questions, answer choices, and correct answers.
// Load the json information into a variable.
// var jsonData = require('./questions.json');