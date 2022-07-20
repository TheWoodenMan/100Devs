//Create a dog object that has four properties and three methods

let basketHound = {
  name: "Ponyo",
  legs: 4,
  bark: function () {
    console.log(`${this.name} says Woof Woof`);
  },
  color: "mottled",
  happy: true,
  chaseCat: function () {
    console.log(`${this.name} chases the cat!`);
  },
  sit: function () {
    console.log(`${this.name} sits obediently!`);
  },
};
