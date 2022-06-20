// *Variables*
// Create a variable and console log the value

const numberWang = 1234;

console.log(numberWang);

// Create a variable, add 10 to it, and alert the value

const startNum = 0;

alert(startNum + 1);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subNums(num1, num2, num3, num4) {
  alert(num1 - num2 - num3 - num4);
}

// Create a function that divides one number by another and returns the remainder

function numDiv(num1, num2) {
  return num1 % num2;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function jumanjiTime(num1, num2) {
  const jumanji = num1 + num2;

  if (jumanji > 50) {
    alert("Jumanji");
  } else {
    alert("No Jumanji for you!");
  }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
