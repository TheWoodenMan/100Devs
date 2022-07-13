//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let numArray = [1, 4, 5, 6, 2, 6, 23, 6, 2, 6, 23];

console.log(numArray.reduce((a, b) => a + b, 0));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squareArray(arr) {
  return arr.map((element) => element ** 2);
}

squareArray(numArray);

//Create a function that takes string
//Print the reverse of that string to the console

function stringReverse(str) {
  return str.reverse();
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindromeCheck(str) {
  let testString = str.reverse();
  if (testString === str) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}
