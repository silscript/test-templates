// Website loads all the necessary files and functions.
console.log("Website is ready.");

// Create all the easy questions and ansers in an object and array.
var triviaQuizEasy = [{ 
                        question: "The painter Piet Mondrian belonged to the artistic school knowns as ...",
                        choices: ["Impressionism", "Post-Impression", "Realism"],
                        answer: "De Stijl",
                      },

                      {
                        question: "The French painter who created large-scale history portraits in the Napoleonic era was ...",
                        choices: ["Antoine-François Callet", "François Gérard", "Jean-Antoine Gros"],
                        answer: "Jacque-Louis David",
                      },

                      {
                        question: "Franciso de Goya painted vivid wartime image of the conflict known as ...",
                        choices: ["The Seven Year's War", "The Thirty Year's War", "The War of the Spanish Succession"],
                        answer: "The Napoleonic Wars",
                      }];
  console.log(triviaQuizEasy);

// Create all the normal questions and ansers in an object and array.
// var triviaQuizNorm = {}
  // console.log(triviaQuizNorm)

// Create all the hard questions and ansers in an object and array.
// var triviaQuizHard = {}
  // console.log(triviaQuizHard)


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

var currentQuestion = 0;
  console.log(currentQuestion);

var askingQuestion = true;
  console.log(askingQuestion);

var score = 0;
  console.log(score);