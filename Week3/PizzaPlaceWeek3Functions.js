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
        constructor(Pizza){
            Pizza = {};
            this.Pizza = Pizza;
        }
    add(Val,Name){
        this.Pizza[Val] = Name;
        }
    }
    let FirstPizza = new PALACEPIZZA(); // use class to construct a new pizza
    // FirstPizza.add("Chicken","NUGGETS");
    // console.log(FirstPizza.Pizza.Chicken);
    FirstPizza.add("Size",Arr[0]);
    FirstPizza.add("Crust",Arr[1]);
    FirstPizza.add("Toppings",Arr[2]);
    console.log("Pizza is Cookin'...");
    for (let Y in FirstPizza.pizza){
        console.log(FirstPizza.pizza[Y]);
    }
};



preparePizza(getPizzaOrder("Large","Thick", ["Pepperoni","Red-Peppers","SQUIDS"]));