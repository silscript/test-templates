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

    // Append the individual divs in the "column-right" div.
    $(".column-right").append("<div class='trivia-container'>" + triviaQuizEasy[i]["question"] + "</div>");

    // Create individual <ul> and append them to each object.
    $(".trivia-container").eq(i).append("<ul class='trivia-choices'>" + "</ul>");
    
    // Locate the "choices" key in the object of the array. 
    // Use "j" instead of "i" because "i" is being used to each element group of the outer array.
    for (var j = 0; j < triviaQuizEasy[i]["choices"].length; j++) {

      // Create individual <li> to each object's choices key list.
      $(".trivia-choices").eq(i).append("<li>" + triviaQuizEasy[i]["choices"][j] + "</li>");
    } 
    
    console.log(triviaQuizEasy);
  }; // Closes "triviaQuizEasy.length"


  // Create all the normal questions and answers in an object of the array.
  // var triviaQuizNorm = {}
  // console.log(triviaQuizNorm)

  // Create all the hard questions and answers in an object of the array.
  // var triviaQuizHard = {}
  // console.log(triviaQuizHard)

}); // Closes "document"