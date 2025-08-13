export default class ReceptElonezet {
    #obj = {};
    #szuloElem;
    #nev = "";
    #kep;
    #kedvenc;
    constructor(obj) {
        this.#obj = obj
        this.#szuloElem = document.querySelector(".jatekter");
        this.#nev = obj.nev;
        this.#kep = obj.kep;
        this.#kedvenc = obj.kedvenc ? "Kedvenc" : "Nem kedvenc";
        this.megjelenit();
        //this.kedvencgomb();
    }

    megjelenit() {
        const receptLista = document.createElement('div');
        receptLista.innerHTML = `
                <div class="receptkartya">
                        <img src="${this.#kep}" alt="${this.#nev}">
                    <div class= "receptbox">
                        <h5 class="receptnev">${this.#nev}</h5>
                        <button class="kedvenc">${this.#kedvenc}</button>
                    </div>
                </div>
        `;
        this.#szuloElem.appendChild(receptLista);

    }
}