import Ghibli from "./Ghibli.mjs";
//import Routeur from "./Routeur.mjs";

export default class App {
    URLGhibli = "https://ghibliapi.herokuapp.com/";
    //#routeur;
    #domParent;

    constructor(){
        this.#domParent = document.querySelector(".catalogue");
        this.getFilms();
    }

    getFilms(){
        const oGhibli = new Ghibli();
        oGhibli.getFilmsXHR(function(films){
            console.log(films);
            //traiter les films...
            
            this.afficherFilms(films);
        }.bind(this));

        oGhibli.getFilmsXHR(this.afficherFilms.bind(this));
    }


    async getFilmsAsync(){
        
    }
    
    afficherFilms(aFilms){
        let chaineHtml = "";
        let chainePerso = [];
        aFilms.forEach(unFilm=> {
            chaineHtml += `<article data-id=${unFilm.id} class="carte">
                                <header>
                                    <h2>${unFilm.title} (${unFilm.release_date})</h2>
                                    <h3>${unFilm.original_title}</h3>
                                </header>
                                <img src="${unFilm.image}">
                                <div class="contenu">
                                    <p>${unFilm.description}</p>
                                    
                                </div>
                                <footer class="action">x, y z</footer>
                            </article>`;

        });
        this.#domParent.innerHTML = chaineHtml;
    }

}