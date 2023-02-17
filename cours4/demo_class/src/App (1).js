import { cours } from "./data.js";
import Horaire from "./Horaire.js";
import Information from "./Information.js";
import Inscription from "./Inscription.js";


export default class App{
    #nbCoursMax = 4;
    #indexComposant = 0;
    #aComposant = [];
    

    constructor(){
        console.log(this)
        let _self = this;
        const elementParent = document.querySelector(".app");
        const btnSuivant = document.querySelector(".btn.suivant");
        btnSuivant.addEventListener("click", this.suivant.bind(this));

        // Instanciation des composants
        const panneauInfo = new Information(elementParent, this.#nbCoursMax);
        const panneauInscription = new Inscription(elementParent);
        const panneauHoraire = new Horaire(elementParent);
        
        // Ajout des composants dans le caroussel 
        this.#aComposant.push(panneauInfo);
        this.#aComposant.push(panneauInscription);
        this.#aComposant.push(panneauHoraire);
        this.#aComposant[this.#indexComposant].afficher();

        this.test();
        //panneauInfo.afficher();
        //panneauInscription.afficher();
        //panneauHoraire.afficher();
        
        //elementParent.innerHTML = htmlInfo;



    }
    test(){
        console.log(this)
    }
    suivant(){
        //this.#aComposant.push(this.#aComposant.shift());
        //this.#aComposant[0].afficher();
        //console.log(this)
        let data = this.#aComposant[this.#indexComposant].getData()
        this.#indexComposant++;
        this.#aComposant[this.#indexComposant].setData(data);
        this.#aComposant[this.#indexComposant].afficher();
        console.log("suivant")
    }


}
