//Create a constructor with 4 properties and 3 methods
const Pizza = function (size, toppings, brand, crust) {
  let self = this;
  this.size = `12"`;
  this.toppings = ["cheese", "pepperoni", "chicken"];
  this.brand = "dominos";
  this.crust = "stuffed";
  this.cutPizza = function (pieces) {
    console.log(`the ${self.size} pizza has been cut into ${pieces} pieces.`);
  };
  this.servePizza = function (name) {
    console.log(
      `Hi, ${name} this ${self.size} pizza has a ${
        self.crust
      } crust and the toppings ${self.toppingsList()}`
    );
  };
  this.toppingsList = function () {
    let output = "";
    for (let i = 0; i < self.toppings; i++) {
      console.log(output);
      output = output.concat(self.toppings[i]);
    }
    return output;
  };
};

let dominoes = new Pizza(
  `8"`,
  ["cheese", "pepperoni", "chicken"],
  "dominoes",
  "normal"
);
