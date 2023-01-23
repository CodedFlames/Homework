let pizzaToppings = ["Pepperoni","Red-Peppers","Sausage","Canadian-Bacon"];

function greetCustomer(){
    console.log("Welcome to Johnny's Pizza Palace! Our toppings are; ")
    for (let i = 0; i < pizzaToppings.length; i++){
        console.log(pizzaToppings[i]);
    }
};

function getPizzaOrder(size,crust,toppings){
    console.log(`One ${size} ${crust} crust Pizza coming up with`);
    for (let i = 0; i < toppings.length; i++){
        console.log(toppings[i]);
        let Test = (V) => {return V == toppings[i]}; //declare function for our .find
        let checkit = pizzaToppings.find(Test); //.find on pizzatoppings method runs and jumps to Test
        if (checkit == undefined){ //If one of the items in our 'test' on checkit comes back as undefined, print it doesn't exist.
            console.log("This item doesn't exist.");
        }
    }
    let pizza = [size,crust,toppings];
    return pizza
};

function preparePizza(Arr){
    class PALACEPIZZA {
        constructor(size,crust,toppings,Pizza){
            Pizza = {};
            Pizza.size = size;
            Pizza.crust = crust;
            Pizza.toppings = toppings;
            this.Pizza = Pizza;
        }
    add(Val,Name){
        this.Pizza[Val] = Name;
        }
    list(){
        console.log(this.Pizza);
    }
    }
    let FirstPizza = new PALACEPIZZA(Arr[0],Arr[1],Arr[2]); // use class to construct a new pizza
    console.log("Pizza is Cookin'...");
    FirstPizza.list();
    return FirstPizza.Pizza;
};

function servePizza(PizzaOrder){
    let Size = PizzaOrder.size;
    let Crust = PizzaOrder.crust;
    let toppings = PizzaOrder.toppings;
    console.log(`Here's your ${Size} ${Crust} crust Pizza with ${toppings}!`);
}

let Order = getPizzaOrder("Large","Thick",[" Pepperoni "," Red-Peppers "," Sausage "]);
let Making = preparePizza(Order);
let final = servePizza(Making);