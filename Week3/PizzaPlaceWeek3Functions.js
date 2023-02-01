let pizzaToppings = ["Pepperoni", "Red-Peppers", "Sausage", "Canadian-Bacon"]
function listToppings(Toppings) {
    let txt = '';
    if (Toppings[0] == "Cheese"){
        return;
    }
    for (let x in Toppings) {
        let Test = (V) => V == Toppings[x]; //declare function for our .find
        let checkit = pizzaToppings.find(Test); //.find on pizzatoppings method runs and jumps to Test
        if (checkit == undefined) { //If one of the items in our 'test' on checkit comes back as undefined, print it doesn't exist.
            return false;
        }
        if (x == Toppings.length - 1) {
            txt += (" And... ")
        }
        txt += (Toppings[x]);
        txt += (' ');
    }
    return txt
}


function greetCustomer() {
    let alltext = '';
    for (let i of pizzaToppings) {
    alltext += i;
    alltext += " "; //empty space
    }
    console.log(`Welcome to Johnny's pizza palace! our toppings are ${alltext}`)
};


function getPizzaOrder(size, crust, ...toppings) {
    if (toppings.length === 0) {
        console.log(`One ${size} ${crust} crust cheese pizza.`);
        toppings.push("Cheese");
    } else {
        console.log(`One ${size} ${crust} crust Pizza coming up with ${listToppings(toppings)}`); //string's need to combine
    }
    let tst = listToppings(toppings);
    if (tst === false) {
        console.log("PLEASE REORDER, that is not a topping.")
        return null; //purposely throwing an error for if it can't "find" correctly (line 8 & 9 & 10)
    }
    let pizza = [size, crust, toppings];
    return pizza
};


function preparePizza(Arr) {
    let pizza = {};

    pizza.size = Arr[0];
    pizza.crust = Arr[1];
    pizza.toppings = Arr[2];

    console.log("Pizza is Cookin'...");
    return pizza
};


function servePizza(PizzaOrder) {
    let Size = PizzaOrder.size;
    let Crust = PizzaOrder.crust;
    let toppings = PizzaOrder.toppings;

    if (toppings[0] == "Cheese"){
        console.log(`Here's your ${Size} ${Crust} crust cheese pizza!`)
    }else{
    console.log(`Here's your ${Size} ${Crust} crust Pizza with! ${listToppings(toppings)}`);
    }
}


greetCustomer();

// let Order = getPizzaOrder("Large", "Deep dish"); //will assume plain cheese.

// let Order = getPizzaOrder("Large", "Thick","Squids"); // wrong topping, will error after telling you to reorder

let Order = getPizzaOrder("Large", "Thin", "Red-Peppers","Pepperoni"); //Normal pizza operations

let Making = preparePizza(Order);

let final = servePizza(Making);