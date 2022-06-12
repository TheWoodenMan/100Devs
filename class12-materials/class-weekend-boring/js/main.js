document.querySelector("#check").addEventListener("click", run);

function run() {
  const day = document.querySelector("#day").value.toLowerCase();
  const place = document.querySelector("#placeToSee");

  if (day === "saturday" || day === "sunday") {
    place.innerHTML = "It's the weekend";
  } else if (day === "monday" || day === "wednesday" || day === "friday") {
    place.innerHTML = "It's a boring day";
  } else if (day === "tuesday" || day === "thursday") {
    place.innerHTML = "It's a class day";
  } else {
    place.innerHTML = "It's not a day fam";
  }
}

//Conditionals go here
