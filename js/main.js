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

// Create all the questions and ansers in an object and array.
var triviaQuiz = [{ "trivia-question": "The painter Piet Mondrian belonged to the artistic school knowns as ...",
                    "trivia-choices": ["Impressionism", "Post-Impression", "Realism"],
                    "trivia-answer": "De Stijl",
                  },

                  {
                    "trivia-question": "The French painter who created large-scale history portraits in the Napoleonic era was ...",
                    "trivia-choices": ["Antoine-François Callet", "François Gérard", "Jean-Antoine Gros"],
                    "trivia-answer": "Jacque-Louis David",
                  },

                  {
                    "trivia-question": "Franciso de Goya painted vivid wartime image of the conflict known as ...",
                    "trivia-choices": ["The Seven Year's War", "The Thirty Year's War", "The War of the Spanish Succession"],
                    "trivia-answer": "The Napoleonic Wars",
                  }];
  console.log(triviaQuiz);