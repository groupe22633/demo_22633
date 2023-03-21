import Ghibli from "./Ghibli.mjs";
//import Routeur from "./Routeur.mjs";

export default class App {
    URLGhibli = "https://ghibliapi.herokuapp.com/";
    //#routeur;
    #domParent;
    #aFilms;
    #triActif = {
        prop:"rt_score",
        ordre: "ASC"
    };
    // 
    #filtreActif = {
        prop:"release_date",
        valeur: ""  // Changer la valeur pour avoir un filtre
    };
    
    constructor(){
        this.#domParent = document.querySelector(".catalogue");
        
        document.querySelectorAll(".btn-tri").forEach((btn)=>{
            btn.addEventListener("click", this.appliquerTri.bind(this));
        });
        
        this.getFilms();
        console.log(this.#aFilms)

        /*setInterval(()=>{
            this.getFilms();
        }, 2000);*/
        //this.getFilmsAsync()
    }

    getFilms(){
        const oGhibli = new Ghibli();
        /*oGhibli.getFilmsXHR(function(films){
            console.log(films);
            films = this.meilleursFilms(films, 5);
            //traiter les films...
            
            this.afficherFilms(films);
        }.bind(this));*/

        //oGhibli.getFilmsXHR(this.afficherFilms.bind(this));
        
        /*oGhibli.getFilms(function(films){
            console.log(films);
            films = this.meilleursFilms(films, 5);
            //traiter les films...
            
            this.afficherFilms(films);
        }.bind(this));
*/
        oGhibli.getFilmsPromise()
            .then((films)=>{
                this.#aFilms = films;
               
                this.afficherFilms(films);
            })
    }


    async getFilmsAsync(){
        const oGhibli = new Ghibli();
        //let films = await oGhibli.getFilmsAsync();
        //this.afficherFilms(films);

        oGhibli.getFilmsAsync((films)=>{
            this.afficherFilms(films);
        });
    }
    
    meilleursFilms(aFilms, nombre){
        aFilms.sort((a,b)=>{
            return b.rt_score - a.rt_score;
        })
        return aFilms.slice(0, nombre);
    }

    appliquerTri(evt){
        if(this.#triActif.prop == evt.target.dataset.tri){
            if(this.#triActif.ordre == "ASC"){
                this.#triActif.ordre = "DESC"
            }else{
                this.#triActif.ordre = "ASC"
            }
        }else{
            this.#triActif.prop = evt.target.dataset.tri;
            this.#triActif.ordre = "ASC";
        }
        this.#triActif.type = evt.target.dataset.type;
        this.afficherFilms(this.#aFilms);
    }
    
    filtrer(aFilms){    
        if(this.#filtreActif.prop != ""){
            console.log(this.#filtreActif)
            let prop = this.#filtreActif.prop;
            let valeur = this.#filtreActif.valeur;
            if(valeur){
                aFilms = aFilms.filter((film)=>{

                    return (film[prop] == valeur);
                })
            }
            
            console.log(this.#aFilms)
        }
        return aFilms
    }

    trier(){
        
        let tri = this.#triActif.prop;
        let ordre = this.#triActif.ordre;
        if(this.#triActif.type == "string"){
            this.#aFilms.sort((a,b)=>{
                return a[tri].localeCompare(b[tri]);    
            })
        }
        else if(this.#triActif.type == "number"){
            this.#aFilms.sort((a,b)=>{
                return a[tri] - b[tri];    
            })
        }else{
            this.#aFilms.sort((a,b)=>{
                let res = 0;
                if(a[tri] < b[tri]){
                    res = 1;
                }    
                else if(a[tri] > b[tri]){
                    res = -1;
                }
                return res;
            })
        }
        if(ordre == "DESC"){
            this.#aFilms.reverse();
        }
        
    }



    afficherFilms(aFilms){
        this.trier();
        aFilms = this.filtrer(aFilms);

        console.log(aFilms)
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