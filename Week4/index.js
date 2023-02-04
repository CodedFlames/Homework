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
    let img2 = document.createElement('img');
    let img3 = document.createElement('img');

    img1.src = './images/Falcon.png';
    img2.src = './images/eagle.png';
    img3.src = './images/needletail.png';
    
    
    img1.alt = 'A Peregrine falcon on a tree limb.'
    img2.alt = 'A golden eagle standing on a tree limb.'
    img3.alt = 'A White-throated needletail flying in the sky.'


    item1.style.margin = "10px";
    item2.style.margin = "10px";
    item3.style.margin = "10px";
    item1.style.width = "580px";
    item2.style.width = "580px";
    item3.style.width = "580px";


    item1.innerHTML = `Peregrine falcon - Speed of 242 MPH (389 km/h) while diving.`;


    item2.innerHTML = `Golden eagle - Speed of 150 MPH (240 km/h) while diving.`;


    item3.innerHTML = `White-throated needletail - Speed of 105 MPH (169 km/h) in flight.`;





    if (!birdpage){
        birdpage = true;
        document.querySelector("#BIRD").appendChild(FactList);
        FactList.appendChild(item1);
        FactList.appendChild(item2);
        FactList.appendChild(item3);
        //img append
        item1.appendChild(img1);
        item2.appendChild(img2);
        item3.appendChild(img3);
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
    let img2 = document.createElement('img');
    let img3 = document.createElement('img');


    img1.src = './images/Black Marlin.png';
    img2.src = './images/Sailfish.png';
    img3.src = './images/Swordfish.png';
    
    
    img1.alt = 'A Black Marlin swimming.';
    img2.alt = 'A rendering of a Sailfish.';
    img3.alt = 'A Swordfish in low-light, swimming.';


    item1.style.margin = "10px";
    item2.style.margin = "10px";
    item3.style.margin = "10px";
    item1.style.width = "580px";
    item2.style.width = "580px";
    item3.style.width = "580px";



    item1.innerHTML = `Black marlin - Speed of 82 MPH (132 km/h) while swimming.`;


    item2.innerHTML = `Sail Fish - Speed of 68 MPH (109 km/h) while swimming.`;


    item3.innerHTML = `Sword Fish - Speed of 60 MPH (97 km/h) while swimming.`;





    if (!Fishpage){
        Fishpage = true;
        document.querySelector("#FISH").appendChild(FactList);
        FactList.appendChild(item1);
        FactList.appendChild(item2);
        FactList.appendChild(item3);
        //imgs
        item1.appendChild(img1);
        item2.appendChild(img2);
        item3.appendChild(img3);
        document.querySelector("#FISH").style.width = '1000px';
    }else{
        Fishpage = false;
        document.querySelector("#FISH").lastChild.remove();
        document.querySelector("#FISH").style.width = '150px';
    }
}




document.querySelector("#FISH > h2").addEventListener("click", Fish);
document.querySelector("#BIRD > h2").addEventListener("click", Bird);