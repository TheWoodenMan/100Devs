//Create a function that grabs the number of snacks from the input and tells you to stop that many times

function stopSnacking() {
  let stopTimes = document.querySelector("input").value;
  document.querySelector("#stops").innerHTML = "";
  for (i = 0; i < stopTimes; i++) {
    document.querySelector("#stops").innerHTML += "STOP";
  }
}

document.querySelector("#help").addEventListener("click", stopSnacking);
