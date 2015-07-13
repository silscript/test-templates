"use strict";

// Website loads all the necessary files and functions.
$(document).ready(function() {
    console.log("Webpage is ready!");

  // Create all the easy questions and ansers in an array and.
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

    // Create all the normal questions and ansers in an object and array.
    // var triviaQuizNorm = {}
    // console.log(triviaQuizNorm)

    // Create all the hard questions and ansers in an object and array.
    // var triviaQuizHard = {}
    // console.log(triviaQuizHard)


  // Find the "question" in the trivaQuizEasy array.
  for (var i = 0; i < triviaQuizEasy.length; i++) {
    triviaQuizEasy[i].question;
    console.log(triviaQuizEasy[i].question);
  };


  // Find the "choices" in the trivaQuizEasy array.
  for (var i = 0; i < triviaQuizEasy.length; i++) {
    console.log(triviaQuizEasy[i].choices);
  };
    // Append an unordered list in #trivia-container.
    $("#trivia-container").append("<ul id='trivia-choices' class='choices'></ul>");

    // // Append a list into the #triva-container.
    // $("#trivia-choices").append("<li>" + triviaQuizEasy[0].choices[0] + "</li>");
    // $("#trivia-choices").append("<li>" + triviaQuizEasy[0].choices[1] + "</li>");
    // $("#trivia-choices").append("<li>" + triviaQuizEasy[0].choices[2] + "</li>");
    // Refactor this into a loop. Index of the first object and then i the contents inside of it.

    for (var i = 0; i < triviaQuizEasy[0].choices.length; i++) {
      $("#trivia-choices").append("<li>" + triviaQuizEasy[0].choices[i] + "</li>");
      console.log(triviaQuizEasy[i].choices);
    };

 
    // // 
    // $("#trivia-choices").append("<li>" + triviaQuizEasy[1].choices + "</li>");
    // $("#trivia-choices").append("<li>" + triviaQuizEasy[2].choices + "</li>");


  // Find the "answer" in the trivaQuizEasy array.
  for (var i = 0; i < triviaQuizEasy.length; i++) {
    triviaQuizEasy[i].answer;
    console.log(triviaQuizEasy[i].answer);
  };

}); // Closes "document"




// Define all the variables.
// var siteContent = document.querySelector(".site-content");
//   console.log(siteContent);

// var triviaChoices = document.getElementById("trivia-choices");
//   console.log(triviaChoices);

// var triviaScore = document.getElementById("trivia-score");
//   console.log(triviaScore);

// var buttonSubmit = document.getElementById("trivia-submit");
//   console.log(buttonSubmit);

// var currentQuestion = 0;
//   console.log(currentQuestion);

// var askingQuestion = true;
//   console.log(askingQuestion);

// var score = 0;
//   console.log(score);