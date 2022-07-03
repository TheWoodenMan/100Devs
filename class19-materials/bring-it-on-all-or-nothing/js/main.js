// *Variables*
// Declare a variable, assign it a boolean, and alert the value

const zebra = false;
alert(zebra);

// Declare a variable, reassign it to your favorite color, and console log
// the value

const favoriteColor = "blue";
console.log(favoriteColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first
// 3 numbers divided by the fourth. Return the result. Call the function.

function fourNums(n1, n2, n3, n4) {
  return (n1 + n2 + n3) / n4;
}

// Create a function that takes in 2 numbers. Console log the first number
// to the power of the second. Call the function.

function toThePower(n1, n2) {
  console.log(n1 ** n2);
}

toThePower(2, 4);

// *Conditionals*
// Create a function that takes in a boolean and a string.
// If the boolean is true, alert the string. If the boolean is false,
// console log the string

function alertOrString(bool, string) {
  //   if (bool) {
  //     alert(string);
  //   } else {
  //     console.log(string);
  //   }
  bool ? alert(string) : console.log(string);
}

const alertFunc = (bool, string) =>
  bool ? alert(string) : console.log(string);

//*Loops*
//Create a function that takes in a number. Console log all values from
// 1 to that number, but if the number is divisible by 3 log "fizz"
//instead of that number, if the number is divisible by 5 log "buzz"
// instead of the number, and if the number is divisible by 3 and 5 log
//  "fizzbuzz" instead of that number

function fizzNum(num) {
  for (let i = 0; i < num; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzNum(40);
