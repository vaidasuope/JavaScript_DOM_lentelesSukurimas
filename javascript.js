"use strict"
console.log(window);
console.log(navigator);
console.log(document);

//pasiimam elementa su JS is html
const spalva=document.getElementById("pirmas");
spalva.style.color="red";
console.log(spalva);

const elementas=document.getElementsByTagName("p");
console.log(elementas);

const visi=document.querySelectorAll("p");
console.log(visi);

const klase=document.getElementsByClassName("paragrafas");
console.log(klase);

//idedam teksta su JS i pasirinkta elementa
const antraste=document.querySelector("#antras");
antraste.textContent="Jus sveikina JS";

//idejimas elemento su informacija, su tekstu
const manolist=document.querySelector("#sarasas");
manolist.innerHTML+="<li>pirmas punktas</li>";


//kai cikla turim ir norim, kad vis mums nauja eilute po apacia pridetu.
//Galim kaip list'a kurti arba kaip lentele
const kur=document.getElementById("sarasas");
const ka=document.createElement("li");
ka.textContent="naujas tekstas";
kur.appendChild(ka);

//kai visiem norim tarkim p elementams pakeisti spalva, tai logiska yra naudoti cikla
// let x=document.getElementsByTagName("p");


//cia, kad po mygtuko paspaudimo idetu kita dar punkta saraso
const mygtukas=document.getElementById("spausk");
mygtukas.addEventListener("click", kitasTekstas);

function kitasTekstas(){
    const manolist=document.querySelector("#sarasas");
    manolist.innerHTML+="<li>pirmas punktas</li>";
}

//Savarankiska uzduotis, kad pagal ivestus skaicius suformuotu lentele


const mygtukas1=document.getElementById("pateikti");
mygtukas1.addEventListener("click", naujaLentele);
const kur1 = document.getElementById("lentele");//lentele randam viena karta

function naujaLentele() {
    var pirmasSkaicius = document.getElementById("eilute").value;
    var antrasSkaicius = document.getElementById("stulpelis").value;
    for (let i = 0; i < pirmasSkaicius; i++) {
        // const kur1 = document.getElementById("lentele");
        const ka1 = document.createElement("tr");
        // ka1.textContent = "eilute";
        kur1.appendChild(ka1);
        for (let j = 0; j < antrasSkaicius; j++) {
            // const kur = document.getElementById("lentele");
            const ka = document.createElement("td");
            ka.textContent = "stulpelis";//i stulpeli isidedam teksta
            kur1.appendChild(ka);//i eilute idedam stulpelis
        }
    }
}