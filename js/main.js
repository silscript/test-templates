// Necessary Deliverables
    // A hosted copy of your game or app, built by you, hosted on Github pages.
    // Your HTML/CSS should pass the HTML5 Validator and CSS Validators
    // A git repository hosted on Github with frequent commits.
    // A link to your hosted project in the URL section of your Github repo
    // A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

// Technical Requirements
    // Render in the browser.
    // Include separate HTML, CSS, and JavaScript files.
    // Use with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles.
    // Use JavaScript or jQuery for DOM manipulation.
    // Deploy online, using GitHub project pages.
    // Use semantic markup for HTML and CSS.

// Trivia Game
    // A simple trivia game with "subject" related questions.

// Bonus:
    // Add time-based scoring.
    // Track scores across games (even if the page is reloaded).
    // Allow users to compete against each other on a high-score board.

// User Stories
    // As a user, I should be able to ...
        // Answer a question in order to continue with the trivia.
        // Know if my answer was correct in order to feel accomplished.
        // Know if my answer was incorrect in order to learn the correct answer.
        // Know what my score is in order to keep track of my correct answers.
        // Know which question I am currently on in order to keep track of my progress.
        // See a list of questions with the correct answers to learn where I was correct or incorrect.
        // Select a trivia topic in order to enjoy the trivia game.
        // Select a level in order to test my intelligence.
        // Skip a question in order to avoid a question.

// Psuedocode
    // User load website on their computer.
    // Website loads all the necessary files and functions.
    // User views website and reads instructions.
    // User decided which level of difficulty.
        // Beginner
        // Intermediate
        // Advanced
    // If user clicks on one of the following buttons.
        // Beginner
            // Beginner level questions will load.
        // Intermediate
            // Intermediate level questions will load.
        // Advaned
            // Advanced level questions will load.
    // All questions will append the css style when they load.
    // User sees the first question.
    // User will decide which option to answer.
        // If user is correct ...
            // Correct answer will turn green.
            // One point will be added to the score (#/##).
        // If user is incorrect ...
            // Incorect answer will turn red.
            // Correct answer will turn green.
            // No points will be added to the score.
    // User will click the next question button.
    // Next question will load.
    // User will repeat the previous steps until all questions are answered.
    // When all questions are answer ...
        // Score will appear.
        // Will you like play again?
            // Yes or no?
                // If yes ...
                    // User will choose level of difficulty again.
                // If no ...
                    // Website will load to the instructions.