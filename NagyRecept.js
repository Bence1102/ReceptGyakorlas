export default class NagyRecept{
    #szElem;
    #receptList={};
    #nev="";
    #kep;
    #leiras="";
    #hozzavalok=[];
    constructor(receptList){
            this.#receptList=receptList;
            this.#szElem=document.querySelector(".adatok");
            this.#nev=receptList.nev;
            this.#kep=receptList.kep;
            this.#leiras=receptList.leiras;
            this.#hozzavalok=receptList.hozzavalok;
            this.megjelenites();
    }

    megjelenites(){
        const receptElem = document.createElement("div");
        receptElem.innerHTML=`
            <div class="nagyrecept">
                <h3 class="nev">${this.#nev}</h3>
                <img src="${this.#kep}" alt="${this.#nev}">
                <p class="receptleiras">${this.#leiras}</p>
                <h4 class="hozzavalok">Hozzávalók:</h4>
            </div">
        `;
        this.#szElem.appendChild(receptElem);
        const hozzaValok= document.createElement("ul");
        hozzaValok.className="hozzavalokleiras";
        this.#hozzavalok.forEach(hozzavalo =>{
            const liTag= document.createElement("li");
            liTag.textContent= hozzavalo;
            hozzaValok.appendChild(liTag);
        });
        receptElem.appendChild(hozzaValok);
    }
}