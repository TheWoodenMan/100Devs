//Write your pseduo code first!

document.querySelector("button").addEventListener("click", tempConvert);

function tempConvert() {
  let farenheit;
  let celsius;
  celsius = document.querySelector("#celsiusIn").value;
  farenheit = celsius * 1.8 + 32;
  document.querySelector(
    "#showTemp"
  ).innerHTML = `The temperature is: ${farenheit}`;
}
