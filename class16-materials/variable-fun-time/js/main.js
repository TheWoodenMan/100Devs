//--- Easy
//create a variable and assign it a number

let num = 5;

//minus 10 from that number

num -= 10;

//print that number to the console

console.log(num);

//--- Medium
//create a variable that holds a value from the input

//add 25 to that number

// numValue += 25;

//alert that number

// alert(numValue);

//--- Hard
//create a variable that holds the h1

const title = document.querySelector("h1").value;

//add an event listener to that element that console logs the sum of the two previous variables

document.querySelector("h1").addEventListener("click", sumValues);

function sumValues() {
  let numValue = document.querySelector("#danceDanceRevolution").value;
  console.log(numValue + num);
}
