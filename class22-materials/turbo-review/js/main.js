// *Variables*
// Declare a variable and assign it to your fav drink as a string.
let favoriteDrink = "San Pellegrino";
favoriteDrink = favoriteDrink.trim();
//Make sure there is no whitespace on either side of the string, and print the value to the console

console.log(favoriteDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let anotherDrink = "Really Nice Apple Juice";

function appleCheck(str) {
  let lowerString = str.toLowerCase();
  if (lowerString.match("apple")) {
    console.log("The apple has landed");
  } else {
    console.log("no apples for you");
  }
}

appleCheck(anotherDrink);
appleCheck(favoriteDrink);
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
  let janKen = Math.random();
  console.log(janKen);
  if (janKen < 0.33) {
    return "rock";
  } else if (janKen < 0.66) {
    return "paper";
  } else if (janKen >= 0.66) {
    return "scissors";
  } else {
    return "Theres an error yo!";
  }
}

rockPaperScissors();

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of
// rock paper scissors against a bot using the above function

function playRockPaperScissors(play) {
  let playerChoice = play;
  let computerChoice = rockPaperScissors();
  if (playerChoice === computerChoice) {
    return `Player chose ${playerChoice}, Computer chose ${computerChoice} - It's a draw!`;
  } else if (
    (playerChoice === "rock") & (computerChoice === "scissors") ||
    (playerChoice === "paper") & (computerChoice === "rock") ||
    (playerChoice === "scissors") & (computerChoice === "paper")
  ) {
    return `Player chose ${playerChoice}, Computer chose ${computerChoice} - Player Wins!`;
  } else if (
    (computerChoice === "rock") & (playerChoice === "scissors") ||
    (computerChoice === "paper") & (playerChoice === "rock") ||
    (computerChoice === "scissors") & (playerChoice === "paper")
  ) {
    return `Player chose ${playerChoice}, Computer chose ${computerChoice} - Computer Wins!`;
  } else {
    return "There's an error yo";
  }
}
console.log(playRockPaperScissors("rock"));

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array.
// Print the results of each game to the console.

function choiceArray(arr) {
  let gameOutcome = "";
  let outcomeArray = [];
  for (let i = 0; i < arr.length; i++) {
    gameOutcome = playRockPaperScissors(arr[i]);
    outcomeArray.push(gameOutcome);
  }

  for (let i = 0; i < outcomeArray.length; i++) {
    console.log(outcomeArray[i]);
  }
}

let choices = [
  "rock",
  "paper",
  "scissors",
  "scissors",
  "paper",
  "rock",
  "paper",
  "scissors",
];

choiceArray(choices);
