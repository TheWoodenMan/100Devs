document.querySelector("#yell").addEventListener("click", buildName);

function buildName() {
  const fName = document.querySelector("#firstName").value;
  const fMid = document.querySelector("#firstMiddle").value;
  const lMid = document.querySelector("#lastMiddle").value;
  const lName = document.querySelector("#lastName").value;

  document.querySelector(
    "#placeToYell"
  ).innerHTML = `ohhh ${fName} ${fMid} ${lMid} ${lName} yo dunnit now!`;
}

// // Angry parent simulator - psuedocode

// // First add an eventlistener to the submit button,
// // this calls the function that runs the rest of the program

// document.querySelector("#yell").addEventListener("click", angery);

// // write a variables section shortcutting all the elements you want to target

// const fName = document.querySelector("#firstName");
// const fMiddle = document.querySelector("#firstMiddle");
// const lMiddle = document.querySelector("#lastMiddle");
// const lName = document.querySelector("#lastName");

// // Write the function that will read all 4 of the text boxes
// // and assign them each to a label in the first part

// function angery() {
//   const firstVar = fName.value;
//   const secondVar = fMiddle.value;
//   const thirdVar = lMiddle.value;
//   const fourthVar = lName.value;

//   document.querySelector(
//     "#placeToYell"
//   ).innerHTML = `Oh boyy, ${firstVar} ${secondVar} ${thirdVar} ${fourthVar} You're in trouble now!`;
// }

// The last part of the function assembles the textbox output and
// assigns it to the h2 element using innerHTML

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }
