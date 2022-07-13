//Create a mouse object that has four properties and three methods

let mouse = {};
mouse.color = "gray";
mouse.ears = 2;
mouse.favoriteFood = "Cheese";
mouse.size = "small";
mouse.squeak = function () {
  console.log(`Squeak, Squeak boiiii`);
};
mouse.hide = function () {
  console.log(`The mouse is now hiding, because it's ${this.size}`);
};
mouse.eatFood = function () {
  console.log(`The mouse eats some ${this.favoriteFood}`);
};

mouse.hide();
