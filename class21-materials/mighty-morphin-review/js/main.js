// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favoriteHoliday = "halloween";
favoriteHoliday = favoriteHoliday.toUpperCase();

console.log(favoriteHoliday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

const myCar = "Vauxhall Zafira";

alert(myCar.slice(myCar.lastIndexOf("i")));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

const fromHundred = function (...numbers) {
  let subTotal = 100;

  for (let i = 0; i < numbers.length; i++) {
    subTotal -= numbers[i];
  }
  return Math.abs(subTotal);
};

console.log(fromHundred(20, 3, 5, 6, 1));

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

const highLow = function (...theArgs) {
  console.log(Math.min(theArgs));
  console.log(Math.max(theArgs));
};

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

const headsOrTails = function () {
  let output;
  let flip = Math.floor(Math.random() * 2) + 1;
  output = flip === 1 ? "Heads" : "Tails";
  return output;
};

headsOrTails();

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times
// where x is the number passed into the function. Call the function.

const checkFlip = function (num) {
  let limit = num;
  let flipResult;

  for (let i = 1; i <= limit; i++) {
    flipResult = headsOrTails();
    console.log(flipResult);
  }
};

checkFlip(10);
