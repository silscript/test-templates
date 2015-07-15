"use strict";

// Website loads all the necessary files and functions.
$(document).ready(function() {
  console.log("Webpage is ready.");

  // Create all the easy questions and ansers in an array and.
  var triviaQuizEasy = [{ 
                          question: "The painter Piet Mondrian belonged to the artistic school knowns as ...",
                          choices: ["De Stijl", "Impressionism", "Post-Impression", "Realism"],
                        },

                        {
                          question: "The French painter who created large-scale history portraits in the Napoleonic era was ...",
                          choices: ["Jacque-Louis David", "Antoine-François Callet", "François Gérard", "Jean-Antoine Gros"],
                        },

                        {
                          question: "Franciso de Goya painted vivid wartime image of the conflict known as ...",
                          choices: ["The Napoleonic Wars", "The Seven Year's War", "The Thirty Year's War", "The War of the Spanish Succession"],
                        }];

  // Create all the normal questions and answers in an object of the array.
  // var triviaQuizNorm = {}
  // console.log(triviaQuizNorm)

  // Create all the hard questions and answers in an object of the array.
  // var triviaQuizHard = {}
  // console.log(triviaQuizHard)

  var index = 0;
  
  function createQuestion() {

    // Create individual <div> to each object.
    // Append the individual divs in the "site-container" div.
    // Append the divs in the "site-container" div
    $(".site-container").append("<div class='trivia-container animation fade-in'>" + "<div class='content-left'><h2 class='trivia-number'>##</h2></div>" + "<div class='content-right'><h2 class='trivia-question'>" + triviaQuizEasy[index]["question"] + "</h2></div></div>");
      console.log("Created base.");

    // Create individual <ul> and append them to each object.
    $(".content-right").append("<ul class='trivia-choices'>" + "</ul>");
      console.log("Creatd list.");

    // Locate the "choices" key in the object of the array. 
    // Use "j" instead of "i" because "i" is being used for each element group of the outer array.
    for (var j = 0; j < triviaQuizEasy[index]["choices"].length; j++) {

      // Create individual <li> to each object's choices key list.
      $(".trivia-choices").append("<li class='choice'>" + triviaQuizEasy[index]["choices"][j] + "</li>");
        console.log("Created choices.")

    }; // Closes "triviaQuizEasy.length"
  }; // Closes "createQuestion"

  createQuestion()
  console.log("Created full question.");

  // Append the score value.
  $(".nav-list").append("<li id='trivia-score'></li>");
    console.log("Appended score.");

  // Create an array of all the correct answers.
  var correctAnswers = ["De Stijl", "Jacque-Louis David", "The Napoleonic Wars"];

  // Add an event listener to all <li> tags.
  $(".choice").click(function() {
    console.log("this =", this);

    $(".trivia-container").removeClass("fade-in");
    $(".trivia-container").addClass("fade-out").remove();

    // Match answers to the individual <li> tags.
    var userChoice = $(this).text();
    console.log(userChoice);

    // Loop through all the answers in the "correctAnswers" array.
    for (var i = 0; i < correctAnswers.length; i++) {

      // If the answer is correct ...
      if (correctAnswers[i] === userChoice) {
        console.log("Answer is correct!");
        // Append the "correct" class.

        // Add 1 point to each correct answer.
        $("#trivia-score").html(function(i, val) {
          return val * 1 + 1;
          console.log("Added 1pt.");
        }); // Closes "trivia-score"
      }; // Closes "if" statement
    }; // Closes "correctAnswers" 

    index++;
    createQuestion();

  }); // Closes ".click"
}); // Closes "(document).ready"