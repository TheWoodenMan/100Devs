//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

function multProduct(array) {
  return array.reduce((a, b) => a * b);
}

console.log(multProduct([10, 10, 10, 10]));
