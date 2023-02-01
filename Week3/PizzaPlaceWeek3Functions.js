let pizzaToppings = ["Pepperoni", "Red-Peppers", "Sausage", "Canadian-Bacon", "Cheese"]; //Kinda had to add cheese as a topping so it wouldn't flag on my listToppings function


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
    return console.log(txt); //string needs to combine
}


function greetCustomer() {
    console.log("Welcome to Johnny's Pizza Palace! Our toppings are; ")
    for (let i of pizzaToppings) {
        console.log(i); //all one string
    }
};


function getPizzaOrder(size, crust, ...toppings) {
    if (toppings.length === 0) {
        console.log(`One ${size} ${crust} crust cheese pizza.`);
        toppings.push("Cheese");
    } else {
        console.log(`One ${size} ${crust} crust Pizza coming up with`); //string's need to combine
    }
    let tst = listToppings(toppings); //here
    if (tst === false) {
        console.log("PLEASE REORDER, that is not a topping.")
        return null;
    }
    let pizza = [size, crust, toppings];
    return pizza
};


function preparePizza(Arr) {
    class PALACEPIZZA {
        constructor(size, crust, toppings, Pizza) {
            Pizza = {};
            Pizza.size = size;
            Pizza.crust = crust;
            Pizza.toppings = toppings; //turn this into only an object
            this.Pizza = Pizza;
        }
        add(Val, Name) {
            this.Pizza[Val] = Name;
        }
        list() {
            console.log(this.Pizza);
        }
    }
    let FirstPizza = new PALACEPIZZA(Arr[0], Arr[1], Arr[2]); 
    console.log("Pizza is Cookin'...");
    return FirstPizza.Pizza;
};


function servePizza(PizzaOrder) {
    let Size = PizzaOrder.size;
    let Crust = PizzaOrder.crust;
    let toppings = PizzaOrder.toppings;

    if (toppings[0] == "Cheese"){
        console.log(`Here's your ${Size} ${Crust} crust cheese pizza!`)
    }else{
    console.log(`Here's your ${Size} ${Crust} crust Pizza with!`); //have one string
    listToppings(toppings);
    }
}


greetCustomer();

let Order = getPizzaOrder("Large", "Thick","Squids"); // With nothing = cheese

// let Order = getPizzaOrder("Large", "Thin", "Red-Peppers","Pepperoni");

let Making = preparePizza(Order);

let final = servePizza(Making);