import ReceptElonezet from "./ReceptElonezet.js";
import { receptLista } from "./receptek.js";

export default class Recept{
    #szuloElem;
    constructor(szuloElem){
        this.#szuloElem=document.querySelector(szuloElem);
        this.megjelenit();
    }


    megjelenit(){
        receptLista.forEach(obj =>{
            new ReceptElonezet(obj)
        });
    }
}