let Fishpage = false;
let birdpage = false;

function Bird(){
    let FactList = document.createElement('ol');
    //li items
    let item1 = document.createElement('li');
    let item2 = document.createElement('li');
    let item3 = document.createElement('li');
    //imgs
    let img1 = document.createElement('img');


    img1.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Falco_peregrinus_m_Humber_Bay_Park_Toronto.jpg/220px-Falco_peregrinus_m_Humber_Bay_Park_Toronto.jpg'
    img1.alt = 'A Peregrine falcon on a tree limb.'

    item1.style.margin = "10px";
    item2.style.margin = "10px";
    item3.style.margin = "10px";


    item1.innerHTML = `Peregrine falcon -`;


    item2.innerHTML = `Golden eagle - `;


    item3.innerHTML = `White-throated needletail -`;





    if (!birdpage){
        birdpage = true;
        document.querySelector("#BIRD").appendChild(FactList);
        FactList.appendChild(item1);
        FactList.appendChild(item2);
        FactList.appendChild(item3);
        item1.appendChild(img1);
        document.querySelector("#BIRD").style.width = '1000px';
    }else{
        birdpage = false;
        document.querySelector("#BIRD").lastChild.remove();
        document.querySelector("#BIRD").style.width = '150px';
    }
}








function Fish(){
    let FactList = document.createElement('ol');
    //li items
    let item1 = document.createElement('li');
    let item2 = document.createElement('li');
    let item3 = document.createElement('li');
    //imgs
    let img1 = document.createElement('img');


    img1.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Maind_u0.gif/220px-Maind_u0.gif'
    img1.alt = 'A Peregrine falcon on a tree limb.'


    item1.style.margin = "10px";
    item2.style.margin = "10px";
    item3.style.margin = "10px";


    item1.innerHTML = `Black marlin -`;


    item2.innerHTML = `Sailfish - `;


    item3.innerHTML = `Swordfish - `;





    if (!Fishpage){
        Fishpage = true;
        document.querySelector("#FISH").appendChild(FactList);
        FactList.appendChild(item1);
        FactList.appendChild(item2);
        FactList.appendChild(item3);
        item1.appendChild(img1);
        document.querySelector("#FISH").style.width = '1000px';
    }else{
        Fishpage = false;
        document.querySelector("#FISH").lastChild.remove();
        document.querySelector("#FISH").style.width = '150px';
    }
}




document.querySelector("#FISH > h2").addEventListener("click", Fish);
document.querySelector("#BIRD > h2").addEventListener("click", Bird);