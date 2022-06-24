// *Variables*
// Create a variable and console log the value

let number = 50;

console.log(number);

// Create a variable, add 10 to it, and alert the value

let number2 = 75;

alert(number2 + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subNums(a, b, c, d) {
  alert(a - b - c - d);
}

subNums(1, 3, 5, 6);

// Create a function that divides one number by another and returns the remainder

function divNums(a, b) {
  return a % b;
}

divNums(10, 3);

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function jumanjiNumbers(a, b) {
  let sumNums = a + b;
  console.log(sumNums);
  if (sumNums > 50) {
    alert("Jumanji");
  }
}

jumanjiNumbers(24, 50);

jumanjiNumbers(1, 3);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function zebraNums(a, b, c) {
  let numProduct = a * b * c;
  if (numProduct % 5 === 0) {
    alert("ZEBRA");
  }
}

zebraNums(5, 5, 5);

zebraNums(1, 3, 4);
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordNum(word, num) {
  for (i = 0; i < num; i++) {
    console.log(word);
  }
}

wordNum("jumanji", 7);
