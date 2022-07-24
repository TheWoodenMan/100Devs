//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

let cocktailRef;
let inputValue;
let pushCounter = 0;
let pushName;

const input = document.querySelector("#input");
const button = document.querySelector("#button");
const cocktailImage = document.querySelector("#cocktailImage");
const cocktailName = document.querySelector("#cocktailName");
const cocktailInstructions = document.querySelector("#cocktailInstructions");

button.addEventListener("click", getCocktail);

function getCocktail() {
  pushName = input.value;
  if (pushName === inputValue) {
    pushCounter++;
    if (pushCounter === Object.keys(cocktailRef.drinks).length) {
      pushCounter = 0;
    }
  } else {
    pushCounter = 0;
  }
  inputValue = input.value;

  fetch(`${url}${inputValue}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      cocktailRef = data;
      console.log(cocktailRef);
      cocktailImage.src = cocktailRef.drinks[pushCounter]["strDrinkThumb"];
      cocktailName.innerHTML = cocktailRef.drinks[pushCounter]["strDrink"];
      cocktailInstructions.innerHTML =
        cocktailRef.drinks[pushCounter]["strInstructions"];
      // cocktailImage.src = data.
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
