//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector("#check").addEventListener("click", dayCheck);

function dayCheck() {
  console.log("testing");
  let day = document.querySelector("#placeToCheck").value;
  day = day.toLowerCase();
  console.log(day);
  let placeToSee = document.querySelector("#placeToSee");
  if (day === "saturday" || day === "sunday") {
    placeToSee.innerHTML = "It's the weekend!";
  } else if (day === "tuesday" || day === "thursday") {
    placeToSee.innerHTML = "It's a class day";
  } else if (day === "monday" || day === "wednesday" || day === "friday") {
    placeToSee.innerHTML = "It's a boring day";
  } else {
    placeToSee.innerHTML = "That's not a day dude!";
  }
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// document.querySelector("#check").addEventListener("click", runDays);

// function runDays() {
//   let compare = document.querySelector("#placeToCheck").value.toLowerCase();
//   let placeToSee = document.querySelector("#placeToSee");
//   if (compare === "sunday" || compare === "saturday") {
//     placeToSee.innerHTML = "It's the weekend!";
//   } else if (compare === "tuesday" || compare === "thursday") {
//     placeToSee.innerHTML = "It's a class day!";
//   } else if (
//     compare === "monday" ||
//     compare === "wednesday" ||
//     compare === "friday"
//   ) {
//     placeToSee.innerHTML = "It's a boring day";
//   } else {
//     placeToSee.innerHTML = "That's not a day fam!";
//   }
// }
