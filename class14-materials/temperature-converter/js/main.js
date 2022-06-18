//Write your pseduo code first!

// First collect the input temp after button press and activate a function

document.querySelector("#button").addEventListener("click", calcTemp);

// Then send the  value of the temp to a variable and process that to get the output

function calcTemp() {
  console.log("sup dog");
  let outputTemp;

  const celsius = document.querySelector("#tempin").value;

  outputTemp = celsius * (9 / 5) + 32;

  document.querySelector("#tempout").innerHTML = outputTemp;
}

// then update the dom to show that new value
