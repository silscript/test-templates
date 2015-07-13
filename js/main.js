"use strict";

// Website loads all the necessary files and functions.
$(document).ready(function() {
    console.log("Webpage is ready!");

  // Create all the easy questions and answers in an array and.
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

  // Create individual <div> to each object.
  for (var i = 0; i < triviaQuizEasy.length; i++) {

    // Append the individual divs in the "column-right" div.
    $(".column-right").append("<div class='trivia-container'>" + triviaQuizEasy + "</div>");
      console.log(triviaQuizEasy);
  };


  // Create all the normal questions and answers in an object of the array.
  // var triviaQuizNorm = {}
  // console.log(triviaQuizNorm)

  // Create all the hard questions and answers in an object of the array.
  // var triviaQuizHard = {}
  // console.log(triviaQuizHard)


  // Locate the "question" in the object of the array.
  for (var i = 0; i < triviaQuizEasy.length; i++) {
    console.log(triviaQuizEasy[i].question);
  };
    // Append a <h2> to each "question".
    $(".trivia-container").eq(0).append("<h2 id='trivia-question'>" + triviaQuizEasy[0].question + "</h2>");
    $(".trivia-container").eq(1).append("<h2 id='trivia-question'>" + triviaQuizEasy[1].question + "</h2>");
    $(".trivia-container").eq(2).append("<h2 id='trivia-question'>" + triviaQuizEasy[2].question + "</h2>");


  // Locate the "choices" in the object of the array.
  for (var i = 0; i < triviaQuizEasy.length; i++) {
    console.log(triviaQuizEasy[i].choices);
  };
    // Append a <ul> to in the "trivia-container" div.
    $(".trivia-container").eq(0).append("<ul class='trivia-choices'>" + "</ul>");
    $(".trivia-container").eq(1).append("<ul class='trivia-choices'>" + "</ul>");
    $(".trivia-container").eq(2).append("<ul class='trivia-choices'>" + "</ul>");

    // Append a <li> to in the "trivia-choices" unordered list.
    $(".trivia-choices").eq(0).append("<li type='button'>" + triviaQuizEasy[0].choices[0] + "</li>");
    $(".trivia-choices").eq(0).append("<li type='button'>" + triviaQuizEasy[0].choices[1] + "</li>");
    $(".trivia-choices").eq(0).append("<li type='button'>" + triviaQuizEasy[0].choices[2] + "</li>");
    $(".trivia-choices").eq(1).append("<li type='button'>" + triviaQuizEasy[1].choices[0] + "</li>");
    $(".trivia-choices").eq(1).append("<li type='button'>" + triviaQuizEasy[1].choices[1] + "</li>");
    $(".trivia-choices").eq(1).append("<li type='button'>" + triviaQuizEasy[1].choices[2] + "</li>");
    $(".trivia-choices").eq(2).append("<li type='button'>" + triviaQuizEasy[2].choices[0] + "</li>");
    $(".trivia-choices").eq(2).append("<li type='button'>" + triviaQuizEasy[2].choices[1] + "</li>");
    $(".trivia-choices").eq(2).append("<li type='button'>" + triviaQuizEasy[2].choices[2] + "</li>");    
    // Refactor in a loop.


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