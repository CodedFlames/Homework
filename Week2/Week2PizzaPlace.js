let pizzaPlace = "Johnny's Pizza Spot"; //declare pizza place name
let numberOfToppings = 13; //declare number of toppings
console.log(pizzaPlace+" "+numberOfToppings); //print both vals
console.log(typeof pizzaPlace, typeof numberOfToppings); //print typeof's

console.log(`Here at ${pizzaPlace} we value our customers! And with our ${numberOfToppings} toppings You'll love eating here!`);

if (numberOfToppings > 10){ //Check if toppings is bigger then 10
    console.log('A whole lot of pizza.');
}else{
    console.log('Quality, not quantity.');
}

//Bonus attempt
let Evens = numberOfToppings;
for (let S = 0; S < numberOfToppings; S++){ //Make S loop up from 0 to the top of numberOfToppings!
    if (Evens % 2 == 0){ //use the wizard magic of Remainder operator to compare if its 0 left to grab the evens!
        console.log(Evens)
    }
    Evens--; //Make sure If statement runs then Evens downgrades.
};




