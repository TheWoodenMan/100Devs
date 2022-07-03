//Create an array of movie titles. Loop through the array and each element
//to the h2.

const movieTitles = ["Bring it On", "Bring it On Again", "Fight to the Finish"];

let h2Output = "";

movieTitles.forEach((x) => {
  h2Output += ` ${x}`;
  document.querySelector("h2").innerHTML = h2Output;
});

//Create an array of numbers. Loop through the array and three to each
//number and replace the old number.

const numArray = [2, 3, 4, 5];

numArray.forEach((x, i, arr) => {
  arr[i] += 3;
});

//Find the average of all the numbers from question three

let subTotal = 0;

numArray.forEach((x) => {
  subTotal += x;
});

console.log(subTotal / numArray.length);
