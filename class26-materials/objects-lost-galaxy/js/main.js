//Create a pizza object that has four properties and three methods

// NB this is object literal notation.
let pizzaPie = {
  size: `12"`,
  toppings: ["cheese", "pepperoni", "chicken"],
  brand: "dominos",
  crust: "stuffed",
  cutPizza: function (pieces) {
    console.log(`the ${size} pizza has been cut into ${pieces} pieces.`);
  },
  servePizza: function (name) {
    console.log(
      `Hi, ${name} this ${size} pizza has a ${crust} crust and the toppings ${this.toppingsList()}`
    );
  },
  toppingsList: function () {
    let output = this.toppings[0];
    for (let i = 1; i < this.toppings.length; i++) {
      output = output + ` ${this.toppings[i]}`;
    }
    return output;
  },
};
