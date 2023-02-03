let fishdiv = document.querySelector("#FISH");
let birddiv = document.querySelector("#BIRDS");
let active = false;



function fishpage(){
console.log("Fish was clicked");

let FactList = document.createElement("ol");
let NumList = {};
let Paras =  {};

for (let i = 0; i < 3; i++){
    let title = `list${i}`;
    NumList[title] = document.createElement("li");
    NumList[title].id = title;
}

for (let i = 0; i < 3; i++){
    let title = `P${i}`
    Paras[title] = document.createElement("p");
}

Paras.P0.innerHTML = 'This is a peregrine falcon.';
Paras.P1.innerHTML = 'This is a golden eagle.';
Paras.P2.innerHTML = 'This is a white-throated needletail.';

// let paradiv = document.createElement("div");


NumList.list0.innerHTML = 'Peregrine-falcon'
NumList.list1.innerHTML = 'Golden eagle'
NumList.list2.innerHTML = 'White-throated needletail'


if(!active){
    active = true;
    // fishdiv.appendChild(paradiv);

    fishdiv.appendChild(FactList)
    for (let x in NumList){
        console.log(NumList[x])
        FactList.appendChild(NumList[x]);
    }

    for (let x in Paras){
        console.log(Paras[x])
        let selection = `list${x}`
        NumList[selection].appendChild(Paras[x]);
    }


    document.querySelector("#FISH").style = "padding-right: 1200px;"
}else{
    fishdiv.lastChild.remove();
    document.querySelector("#FISH").style = ""
    active = false;
}
}


function birdpage(){
console.log("bird was clicked.")
}


document.querySelector("#FISH > h2").addEventListener("click", fishpage);
birddiv.addEventListener("click", birdpage);