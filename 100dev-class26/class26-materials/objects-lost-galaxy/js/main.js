//Create a pizza object that has four properties and three methods

let pizza = {}


    pizza.crust = "stuffed"
    pizza.pan =  "deep"
    pizza.slices = 8
    pizza.toppings = ["cheese","pepperoni", "peppers", "chicken","beef"]
    pizza.size = "12 inch"
    pizza.calzone = function () {
        let folded = true;
        return `you folded the pizza in a half, now it's a calzone eyyy`
    }
    pizza.estimatedDeliveryTime = function () {
        console.log('Calculating...')
    }
    pizza.burnMouth = function() {
        console.log('a;lsdekjfa;sldfj')
    }
    pizza.frisbee = function() {
        console.log('yeeeahhh boi')
    }

