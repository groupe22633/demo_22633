import Affichage from "./Affichage.mjs";
import Details from "./Details.mjs";
import Ghibli from "./Ghibli.mjs";
import Routeur from "./Routeur.mjs";
//import Routeur from "./Routeur.mjs";
export default class App {
    URLGhibli = "https://ghibliapi.herokuapp.com/";
    //#routeur;
    #domParent;
    #aFilms;
    #data;
    #triActif = {
        prop:"rt_score",
        ordre: "ASC"
    };
    // 
    #filtreActif = {
        prop:"release_date",
        valeur: ""  // Changer la valeur pour avoir un filtre
    };
    #eleDetails;

    constructor(){

        //Affichage.afficher({}, document.querySelector("#accueil").innerHTML, document.querySelector(".message"));
        this.#domParent = document.querySelector(".catalogue");
        
        this.#domParent.addEventListener("click", this.ouvrirDetails.bind(this));
        
        document.querySelectorAll(".btn-tri").forEach((btn)=>{
            btn.addEventListener("click", this.appliquerTri.bind(this));
        });
        
        //this.getFilms();
        //console.log(this.#aFilms)
        
        this.oGhibli = new Ghibli();

        this.#eleDetails = new Details();
        
        /*setInterval(()=>{
            this.getFilms();
        }, 2000);*/
        //this.getFilmsAsync()

        this.routeur = new Routeur();
        this.routeur.ajouterRoute("/", ()=>{
            this.afficherAccueil();
            console.log("Route accueil")
        })
        this.routeur.ajouterRoute("/toto", ()=>{
            this.routeur.naviguer("/", true);
        })
        this.routeur.ajouterRoute("/films", this.getFilms.bind(this));
        this.routeur.ajouterRoute("/personnage", this.getPerso.bind(this));
        this.routeur.ajouterRoute("/emplacement", this.getEmplacement.bind(this));
        this.routeur.ajouterRoute("/espece", this.getEspece.bind(this));
        this.routeur.ajouterRoute("/vehicule", this.getVehicule.bind(this));
        this.routeur.demarrer();

        
    }

    getFilms(infoRoute){
        
        console.log(infoRoute)
        this.oGhibli.getRessource("films", (films)=>{
            this.#aFilms = films;
            if(infoRoute.parametres.tri){
                this.#triActif.type = "string";
                console.log("il faut trier");
                let prop = infoRoute.parametres.tri;
                this.#triActif.prop = infoRoute.parametres.tri;;
                this.#triActif.ordre = (infoRoute.parametres.ordre || "ASC");
                this.trier();
            }
            if(infoRoute.parametres.filtre){
                this.#filtreActif.prop = infoRoute.parametres.filtre;
                this.#filtreActif.valeur = infoRoute.parametres.valeur;

                this.#aFilms = this.filtrer( this.#aFilms);
                console.log(this.#aFilms)
                console.log("il faut filtrer")
            }
    
            if(infoRoute.parametres.recherche){
                console.log("il faut exécuter la recherche")
            }

            console.log(films)
            //this.#aFilms = films;
            this.afficherFilms(this.#aFilms);
        })
    }

    getEspece(){
        this.oGhibli.getRessource("species", (data)=>{
            console.log(data)
            this.#data = data;
            this.afficherEspece(data);
        })
        
    }

    getPerso(){
        
        
    }

    getVehicule(){
        
        
    }
    getEmplacement(){
        
        
    }

   
    
    meilleursFilms(aFilms, nombre){
        aFilms.sort((a,b)=>{
            return b.rt_score - a.rt_score;
        })
        return aFilms.slice(0, nombre);
    }

    appliquerTri(evt){
        let route = `/films?tri=${evt.target.dataset.tri}&ordre=${this.#triActif.ordre}`;
        this.routeur.naviguer(route);

        /*if(this.#triActif.prop == evt.target.dataset.tri){
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
        this.afficherFilms(this.#aFilms);*/
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
    getInfo(id){
        let valeur = this.#aFilms.find((unFilm)=>{
            let res =false;
            if(unFilm.id == id){
                res = true;
            }
            return res;
        })
        return valeur;
    }
    ouvrirDetails(evt){
        // Naviguer vers une route


        /*const carte = evt.target.closest(".carte");
        if(carte){
            const id = carte.dataset.id;
            const info = this.getInfo(id);
            //console.log(info)
            this.#eleDetails.ouvrir(info);
        }
        */
    }

    afficherAccueil(){
        this.#domParent.innerHTML = "<h1>Accueil</h1>";
    }

    afficherFilms(aFilms){
       //this.trier();
        //aFilms = this.filtrer(aFilms);
        let gabaritFilm = document.querySelector("#gabaritFilm").innerHTML;
        
        Affichage.afficher(aFilms, gabaritFilm, this.#domParent);
        
        /*
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
        this.#domParent.innerHTML = chaineHtml;*/
    }

    afficherEspece(aData){
        console.log(aData)
        let chaineHtml = "";
        aData.forEach(unElement=> {
            chaineHtml += `<article data-id=${unElement.id} class="carte">
                                <header>
                                    <h2>${unElement.name} (${unElement.classification})</h2>
                                   
                                </header>
                                <div class="contenu">
                                    <p>Yeux : ${unElement.eye_colors}</p>
                                    <p>Cheveux : ${unElement.hair_colors}</p>
                                    
                                </div>
                                <footer class="action">x, y z</footer>
                            </article>`;

        });
        this.#domParent.innerHTML = chaineHtml;
    }

}