document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value;

  if (day === "sunday" || day === "saturday") {
    document.querySelector("#placeToSee").innerHTML = "It's the Weekend";
  } else if (day === "tuesday" || day === "thursday") {
    document.querySelector("#placeToSee").innerHTML = "It's a class day";
  } else if (day === "monday" || day === "wednesday" || day === "friday") {
    document.querySelector("#placeToSee").innerHTML = "It's a boring day";
  } else {
    document.querySelector("#placeToSee").innerHTML = "That's not a day fam!";
  }
}

//Conditionals go here
