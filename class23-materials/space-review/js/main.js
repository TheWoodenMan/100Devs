//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let numArray = [1, 2, 34, 5, 5, 2, 3, 5, 35];

let reduceArray = numArray.reduce((a, b) => a + b, 0);

console.log(reduceArray);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squareAll(arr) {
  return arr.map((element) => element ** 2);
}
console.log(numArray);
let newArray = squareAll(numArray);

console.log(newArray);

//Create a function that takes string
//Print the reverse of that string to the console

function reverseString(str) {
  let outputArray = str.split("").reverse().join("");
  return outputArray;
}

console.log(reverseString("eyyyooooo"));

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palinCheck(str) {
  let checkStr = reverseString(str);
  if (str === checkStr) {
    console.log("Palindrome!");
  } else {
    console.log("Not!");
  }
}

palinCheck("oooyyyooo");
palinCheck("oo3yyyooo");
