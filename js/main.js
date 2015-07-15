"use strict";

// Website loads all the necessary files and functions.
$(document).ready(function() {
  console.log("Webpage is ready.");

  // Create all the easy questions and ansers in an array and.
  var triviaQuizNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  var triviaQuizEasy = [{ 
                          question: "The painter Piet Mondrian belonged to the artistic school knowns as ...",
                          choices: ["De Stijl", "Impressionism", "Post-Impression", "Realism"],
                        },

                        {
                          question: "The French painter who created large-scale history portraits in the Napoleonic era was ...",
                          choices: ["Antoine-François Callet", "François Gérard", "Jacque-Louis David", "Jean-Antoine Gros"],
                        },

                        {
                          question: "Franciso de Goya painted vivid wartime image of the conflict known as ...",
                          choices: ["The Napoleonic Wars", "The Seven Year's War", "The Thirty Year's War", "The War of the Spanish Succession"],
                        },

                        {
                          question: "An artistic style that used images and ideas prevalent in low culture was ...",
                          choices: ["Abstract Expressionism", "Neo-realism", "Pop Art", "Surrealism"],
                        },

                        {
                          question: "The Italian painter who created angular modernist portraits with solid, dark eyes was ...",
                          choices: ["Amadeo Modigliani", "Filippo Marinetti", "Pablo Picasso", "Salvador Dali"],
                        },

                        {
                          question: "Who was the non-native Spanish painter whose singular work featured angular figures and thick outlines?",
                          choices: ["Diego Valáquez", "El Greco", "Hans Holbein", "Titian"],
                        },

                        {
                          question: "Surrealism is the style most closely associated with which of the following artists?",
                          choices: ["Amadeo Modigliani", "Henri Matisse", "Pablo Picasso", "Salvador Dali"],
                        },

                        {
                          question: "The artist who created the famous painting of Holy Roman Emperor Charles V on horseback was ...",
                          choices: ["Diego Valáquez", "Hans Holbein", "Sandro Botticelli", "Titian"],
                        },

                        {
                          question: "The artistic device in which an object in a paiting is made to look like an object on the paiting is known as ...",
                          choices: ["marbleizing", "photorealism", "perspective", "trompe l'oeil"],
                        },

                        {
                          question: "The early American painter Gilbert Stuart is most well-know for his ...",
                          choices: ["history paintings", "landscapes", "nudes", "portraits"],
                        }];

  // Create all the normal questions and answers in an object of the array.
  // var triviaQuizNorm = {}
  // console.log(triviaQuizNorm)

  // Create all the hard questions and answers in an object of the array.
  // var triviaQuizHard = {}
  // console.log(triviaQuizHard)

  // Create the trivia question structure.
  for (var i = 0; i < triviaQuizEasy.length; i++) {

    // Create individual <div> to each object.
    // Append the individual ".trivia-question" in the ".site-container".
    // Append the divs in the ".site-container".
    // Add question number to each <div>.
    $(".site-container").append("<div class='trivia-container animation'>" + "<div class='content-left'><h2 class='trivia-number'>" + triviaQuizNumbers[i] + "</h2></div>" + "<div class='content-right'><h2 class='trivia-question'>" + triviaQuizEasy[i]["question"] + "</h2></div></div>");
      console.log("Created base.");

    // Create individual <ul> and append them to each object.
    $(".content-right").eq(i).append("<ul class='trivia-choices'>" + "</ul>");
      console.log("Created list.");

    // Locate the "choices" key in the object of the array.
    // Use "j" instead of "i" because "i" is being used for each element group of the outer array.
    for (var j = 0; j < triviaQuizEasy[i]["choices"].length; j++) {

      // Create individual <li> to each object's choices key list.
      $(".trivia-choices").eq(i).append("<li class='choice'>" + triviaQuizEasy[i]["choices"][j] + "</li>");
        console.log("Created choices.")

    }; // Closes "triviaQuizEasy.length["choices"]
  }; // Closes "triviaQuizEasy.length

  // Add animation class to each "trivia-container".
  $(".trivia-container").eq(0).addClass("fade-l");
  $(".trivia-container").eq(1).addClass("fade-r");
  $(".trivia-container").eq(2).addClass("fade-l");
  $(".trivia-container").eq(3).addClass("fade-r");  
  $(".trivia-container").eq(4).addClass("fade-l");
  $(".trivia-container").eq(5).addClass("fade-r");
  $(".trivia-container").eq(6).addClass("fade-l");
  $(".trivia-container").eq(7).addClass("fade-r");  
  $(".trivia-container").eq(8).addClass("fade-l");
  $(".trivia-container").eq(9).addClass("fade-r");

  // Append the score value.
  $(".nav-list").append("<li id='trivia-score'></li>");
    console.log("Appended score.");

  // Create an array of all the correct answers.
  var correctAnswers = ["Amadeo Modigliani", "De Stijl", "El Greco", "Jacque-Louis David", "Pop Art", "portraits", "Salvador Dali", "The Napoleonic Wars", "Titian", "trompe l'oeil",];
  var updateScore = 1;

  // Add an event listener to all <li> tags.
  $(".choice").on("click", function() {
    console.log("this =", this);

    var questionContainer = $(this).closest(".trivia-container")

    if (questionContainer.hasClass("answered")) {
      return // to stop it
    };
    questionContainer.addClass("answered");

    // Match answers to the individual <li> tags.
    var userChoice = $(this).text();
    console.log(userChoice);

    // Loop through all the answers in the "correctAnswers" array.
    for (var i = 0; i < correctAnswers.length; i++) {

      // If the answer is correct ...
      if (correctAnswers[i] === userChoice) {
        $(this).closest(".choice").addClass("correct")
        console.log("Answer is correct!");
        // Append the "correct" class. use the questioncontainer

         // Add 1 point to each correct answer.
        $("#trivia-score").html(updateScore);
          updateScore = updateScore + 1;
          console.log("Added 1pt.");
      }; // Closes "if" statement
    }; // Closes "correctAnswers"
  }); // Closes ".click"
}); // Closes "(document).ready"