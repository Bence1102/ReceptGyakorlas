import Recept from "./ReceptKártyák.js";
import NagyRecept from "./NagyRecept.js";
import { receptLista } from "./receptek.js";


new Recept(".jatekter");


let index = 0;
let jelenrecept= new NagyRecept(receptLista[index]);

const eloregomb =document.querySelector(".elore");
const hatragomb = document.querySelector(".hatra");
eloregomb.addEventListener("click", () =>{
    index++;
    if(index >= receptLista.length) index=0;
    document.querySelector(".adatok").innerHTML="";
    jelenrecept=new NagyRecept(receptLista[index]);
});

hatragomb.addEventListener("click", () =>{
    index++;
    if(index >= receptLista.length) index=0;
    document.querySelector(".adatok").innerHTML="";
    jelenrecept=new NagyRecept(receptLista[index]);
});
