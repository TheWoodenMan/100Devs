//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function evenFilter(arr) {
  let outputArray = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      outputArray.push(arr[i]);
    }
  }
  return outputArray;
}
console.log(evenFilter([1, 2, 3, 4, 5, 6, 6, 7, 2, 3, 4, 6, 3]));
