//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

document.querySelector("#sirSavage").addEventListener("click", twentyOneTimes);
let twentyOne = "21 ";
let savageSays = "";

function twentyOneTimes() {
  for (let i = 1; i < 22; i++) {
    savageSays += twentyOne;
    document.querySelector("#savageSays").innerHTML = savageSays;
  }
}
