//--- Easy
//create a variable and assign it a number

let num = 43;

//minus 10 from that number

num -= 10;

//print that number to the console

console.log(num);

//--- Medium
//create a variable that holds a value from the input

//add 25 to that number

//alert that number
let inputPlace = document.querySelector("input");
// currentValue += 25;
// alert(currentValue);

//--- Hard
//create a variable that holds the h1

let clickPlace = document.querySelector("h1");
let outputValue = num;

//add an event listener to that element that console logs the sum of the two previous variables

clickPlace.addEventListener("click", getNum);

function getNum() {
  outputValue += parseInt(inputPlace.value);
  console.log(outputValue);
}
