import {dataGhibli} from "../data/film.js";
import Catalogue from "./Catalogue.mjs";
import Filtre from "./Filtre.mjs";



export default class Application{
    #catalogue;
    constructor(){
        const domCatalogue = document.querySelector(".catalogue"); 
        this.#catalogue = new Catalogue(domCatalogue);
        
        this.#catalogue.setFilms(dataGhibli);

        this.#catalogue.afficher();

        let sectionFiltre = document.querySelector(".liste-categorie");
        sectionFiltre.addEventListener("click", this.appliquerFiltre.bind(this));
    }

    appliquerFiltre(evt){
        if(evt.target.classList.contains("choixFiltre")){
            console.log(evt.target.dataset);
            
            const cat = evt.target.dataset.jsCat;
            const valeur = evt.target.dataset.jsCatValeur;
            
            // appliquer un filtre ?
            let mesFilms = dataGhibli.filter((unFilm)=>{
                let valide = false;
                if(unFilm[cat] == valeur){
                    valide = true;
                }
                return valide;
            })
            
            console.log(mesFilms)
            this.#catalogue.setFilms(mesFilms);
            this.#catalogue.afficher();
        }
    }

}