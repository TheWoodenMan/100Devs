//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let shows = [
  "The Bachelor",
  "The Boys",
  "iCarly",
  "Game of Thrones",
  "Avatar: Legend of Aang",
];

for (let i = 0; i < shows.length; i++) {
  console.log(shows[i]);
}

//Create and array of numbers

let numArray = [11, 23, 22, 25, 26, 29, 64, 120];
//Return a new array of numbers that includes every even number from the previous Arrays

// let onlyEvens = arr => arr.filter((num) num % 2 === 0);
let onlyEvens = (arr) => arr.filter((num) => num % 2 === 0);

console.log(onlyEvens(numArray));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumSecondLowestHighest(arr) {
  let sorted = arr.sort((a, b) => a - b);
  return sorted[1] + sorted[sorted.length - 1];
}
console.log(sumSecondLowestHighest(numArray));
