"use strict";

// Website loads all the necessary files and functions.
$(document).ready(function() {
  console.log("Webpage is ready!");

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

  // Create individual <div> to each object.
  for (var i = 0; i < triviaQuizEasy.length; i++) {

    // Append the individual divs in the "site-container" div.
    // Append the divs in the "site-container" divs.
    $(".site-container").append("<div class='trivia-container'>" + "<div class='content-left'><h2 class='trivia-number'>##</h2></div>" + "<div class='content-right'><h2 class='trivia-question'>" + triviaQuizEasy[i]["question"] + "</h2></div></div>");
      console.log("<div> Have been appended.")

    // Create individual <ul> and append them to each object.
    $(".content-right").eq(i).append("<ul class='trivia-choices'>" + "</ul>");
      console.log("<ul> Have been appended.")

    // Locate the "choices" key in the object of the array. 
    // Use "j" instead of "i" because "i" is being used for each element group of the outer array.
    for (var j = 0; j < triviaQuizEasy[i]["choices"].length; j++) {

      // Create individual <li> to each object's choices key list.
      $(".trivia-choices").eq(i).append("<li class='choice'>" + triviaQuizEasy[i]["choices"][j] + "</li>");
        console.log("<li> Have been appended.")
    };

    console.log(triviaQuizEasy);
  }; // Closes "triviaQuizEasy.length"

  // Create an array of all the correct answers.
  var correctAnswers = ["De Stijl", "Jacque-Louis David", "The Napoleonic Wars"];
  console.log(correctAnswers);

  // Add an event listener to all <li> tags.
  $(".choice").click(function() {
    console.log("this =", this);


    // Match answers to the individual <li> tags.
    var userChoice = $(this).text();
    console.log(userChoice);

    // Loop through all the answers in the "correctAnswers" array.
    for (var i = 0; i < correctAnswers.length; i++) {

      // If the answer is correct ...
      if (correctAnswers[i] === userChoice) {
        // Append the "correct" class.

        // Add 1 point to each correct answer.
        $(".trivia-score").html(function(i, val) {
          return val * 1 + 1;
        });
      };
    };

    console.log("User has chosen.");
  });



  // Create all the normal questions and answers in an object of the array.
  // var triviaQuizNorm = {}
  // console.log(triviaQuizNorm)

  // Create all the hard questions and answers in an object of the array.
  // var triviaQuizHard = {}
  // console.log(triviaQuizHard)

}); // Closes "document"