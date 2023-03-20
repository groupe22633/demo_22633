export default class Filtre{
    #listeValeur = [];

    constructor(domParent, donneesInitiale){
        this.donnees = donneesInitiale;
        this.domParent = domParent;
        this.genererFiltre(donneesInitiale);
    }

    genererFiltre(donnees){
        console.log(donnees);
        this.#listeValeur = donnees.map((unFilm)=>{
            return unFilm.release_date;
        })
        console.log(this.#listeValeur);

        this.#listeValeur = [...new Set(this.#listeValeur)];
        this.afficher();
    }
    /**
     * 
     * @param {string} cat Propriété à filtrer
     * @param {string | number} valeur Valeur du filtre
     * @param {array} donnees Valeur à filtrer
     * @returns array
     */
    appliquerFiltre(cat, valeur, donnees){
         // appliquer un filtre ?
         const mesElements = donnees.filter((unElement)=>{
            let valide = false;
            if(cat == "running_time"){  // valeur == "100-120"
                let [min, max] = valeur.split("-");   // Affecter 100 à min et 120 a max
                
                /*let aValeur = valeur.split("-");    //[100,120]
                let min = aValeur[0]
                let max =  aValeur[1];*/

                if(max == "+"){
                    max = null;
                }

                if(parseFloat(min) <= unElement.running_time && (unElement.running_time <= parseFloat(max) || max == null) ){  //unFilm.release_date
                    valide = true;
                }
            }
            if(Array.isArray(unElement[cat]) ){
                // Faire x, y, z
            }
            else{
                if(unElement[cat] == valeur){  //unFilm.release_date
                    valide = true;
                }
            }
            return valide;
        })
        return mesElements;
    }

    afficher() {
        console.log(this.#listeValeur);
        let chaineHTML = `<div><span>Date de sortie<span class="material-icons">arrow_drop_down</span></span>`;
        this.#listeValeur.forEach((uneValeur)=>{
            chaineHTML += `<li class="choixFiltre" data-js-cat="release_date" data-js-cat-valeur="${uneValeur}" data-js-actif="0">${uneValeur}</li>`;
        })
        chaineHTML += `</div>`;

        const temps = ["0-79", "80-89", "90-99", "100-109", "110-119", "120-+"];
        chaineHTML += `<div><span>Durée<span class="material-icons">arrow_drop_down</span></span>`;
        temps.forEach((uneValeur)=>{
            chaineHTML += `<li class="choixFiltre" data-js-cat="running_time" data-js-cat-valeur="${uneValeur}" data-js-actif="0">${uneValeur}</li>`;
        })
        chaineHTML += `</div>`;


        

        this.domParent.innerHTML = chaineHTML;
        
    }


}