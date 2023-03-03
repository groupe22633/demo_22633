import {dataGhibli} from "../data/film.js";
import Catalogue from "./Catalogue.mjs";
import Filtre from "./Filtre.mjs";



export default class Application{
    #catalogue;
    #filtre;
    constructor(){
        const domCatalogue = document.querySelector(".catalogue"); 
        this.#catalogue = new Catalogue(domCatalogue);
        
        dataGhibli.forEach((unFilm)=>{
            unFilm.dureeHeure = parseInt(unFilm.running_time / 60) + "h"+parseInt(unFilm.running_time % 60).toString().padStart(2, '0');
        })

        this.#catalogue.setFilms(dataGhibli);

        this.#catalogue.afficher();

        let sectionFiltre = document.querySelector(".liste-categorie");
        this.#filtre = new Filtre(sectionFiltre, dataGhibli);
        sectionFiltre.addEventListener("click", this.appliquerFiltre.bind(this));
    }

    appliquerFiltre(evt){
        let mesFilms;
        if(evt.target.classList.contains("choixFiltre")){
            console.log(evt.target.dataset);
            
            const cat = evt.target.dataset.jsCat;
            const valeur = evt.target.dataset.jsCatValeur;
            const eleActif = document.querySelector(".filtre [data-js-actif='1']");
            if(eleActif){               
                eleActif.dataset.jsActif = 0;
            }
            
            if(eleActif == evt.target){
                console.log("actif")    
                mesFilms = dataGhibli;
            }
            else{
                evt.target.dataset.jsActif = 1;
                mesFilms = this.#filtre.appliquerFiltre(cat, valeur, dataGhibli)
            }
            //const mesFilms = this.#filtre.appliquerFiltre("running_time", "90-100", dataGhibli)
           
            
            console.log(mesFilms)
            this.#catalogue.setFilms(mesFilms);
            this.#catalogue.afficher();
        }
    }

}