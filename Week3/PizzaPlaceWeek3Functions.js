let pizzaToppings = ["Pepperoni","Red-Peppers","Sausage","Canadian-Bacon"];

function listToppings(Toppings){
    let txt = '';
    for (let x in Toppings){
        let Test = (V) => {return V == Toppings[x]}; //declare function for our .find
        let checkit = pizzaToppings.find(Test); //.find on pizzatoppings method runs and jumps to Test
        if (checkit == undefined){ //If one of the items in our 'test' on checkit comes back as undefined, print it doesn't exist.
          return  false;
        }
        if (x == Toppings.length-1){
            txt += (" And... ")
        }
        txt += (Toppings[x]);
        txt += (' ');
    }
    return console.log(txt);
}


function greetCustomer(){
    console.log("Welcome to Johnny's Pizza Palace! Our toppings are; ")
    for (let i = 0; i < pizzaToppings.length; i++){
        console.log(pizzaToppings[i]);
    }
};

function getPizzaOrder(size,crust,toppings){
    console.log(`One ${size} ${crust} crust Pizza coming up with`);
    let tst = listToppings(toppings);
    if (tst === false){
         console.log("PLEASE REORDER, that is not a topping.")
        return null;
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
    console.log(`Here's your ${Size} ${Crust} crust Pizza with`);
    listToppings(toppings);
}

let Order = getPizzaOrder("Large","Thick",["Pepperoni","Red-Peppers","SQUIDS"]);
let Making = preparePizza(Order);
let final = servePizza(Making);