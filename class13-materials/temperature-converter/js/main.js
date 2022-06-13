//Write your pseduo code first!

// user types the celcius value into the input box
document.querySelector("#calc").addEventListener("click", calcTemp);

// user clicks the submit button

// eventlistener picks up on the value and runs a function calcTemp

function calcTemp() {
  const celsius = document.querySelector("#celsius").value;
  const farenheit = (celsius * 9) / 5 + 32;

  document.querySelector("#placeToSee").innerText = farenheit;
}

// value is transferred to a variable
// variable is calculated using maths from celcius to F
// new F value is transferred to a variable
// DOM is updated using a query selector to show in an element
