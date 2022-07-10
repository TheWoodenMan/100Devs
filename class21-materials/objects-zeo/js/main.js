//Create a stopwatch object that has
// four properties and three methods

let stopwatch = {
  shape: "circle",
  color: "black",
  weight: "100g",
  currentTime: 12,
  reset: () => (stopwatch.currentTime = 0),
  tellTime: (time) => console.log(`The current time is ${time}`),
};
console.log(stopwatch);
