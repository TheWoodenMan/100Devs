// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

const nameQuestion = "What is your name?";

function questionCheck() {
  if (nameQuestion.endsWith("?")) {
    console.log("It's a question yo!");
  }
}

questionCheck();

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let titleList = "jr. dev, full stack developer, jr.dev, front end developer";

titleList = titleList.replaceAll("jr. dev", "software engineer");

console.log(titleList);

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function randomJanken() {
  let botChoice = Math.random();
  if (botChoice < 0.33) {
    return "rock";
  } else if (botChoice >= 0.33 && botChoice < 0.66) {
    return "paper";
  } else if (botChoice > 0.66) {
    return "scissors";
  } else {
    throw "Error, wrong input.";
    return "error, that's not a valid choice.";
  }
}

randomJanken();

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the
// above function

function playJanken(choice) {
  let botPlay = randomJanken();
  if (choice === botPlay) {
    console.log("It's a draw");
  } else if (
    (choice === "rock" && botPlay === "scissors") ||
    (choice === "scissors" && botPlay === "paper") ||
    (choice === "paper" && botPlay === "rock")
  ) {
    console.log(
      `player chose ${choice}, computer chose ${botPlay} - Player Wins!`
    );
  } else if (
    (choice === "scissors" && "botPlay" === "rock") ||
    (choice === "paper" && "botPlay" === "scissors") ||
    (choice === "rock" && "botPlay" === "paper")
  ) {
    console.log(
      `player chose ${choice}, computer chose ${botPlay} - Computer Wins!`
    );
  }
}

playJanken("rock");

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function multiPlayJanken(arr) {
  for (let i = 0; i < arr.length; i++) {
    playJanken(arr[i]);
  }
}

multiPlayJanken(["rock", "paper", "scissors"]);
