export default class Maire {
    /**
     * @typedef UnMaire
     * @type {object}
     * @property {string} nom - Le nom
     * @property {string} prenom - Le prénom
     * @property {number} debut - Année du début du mandat
     * @property {?number} fin - Année de fin du mandat ou null
     */

    /**
     * @type {UnMaire[]} Tableau des maires
     */
    #aMaires;

    /**
     * Création de la liste des maires
     * @param {UnMaire[]} lesMaires - Tableau des maires pour la ville
     */
    constructor (lesMaires){
        this.#aMaires = lesMaires;
        
        let anneeEnCours = new Date().getFullYear();
        for(let unMaire of this.#aMaires){
            if(unMaire.fin == null){
                unMaire.fin = anneeEnCours;        
            }
        }
        
    }
    
     /**
      * Retourne les résultats de la recherche
      * @param {Object} params - Objet de paramètre
      * @param {string} params.type - Le type de recherche : ["date", "nom"]
      * @param {string | Number} params.valeur - La valeur recherchée
      * @returns {UnMaire[]} - Tableau des résultats;
     */
    rechercheMaires(params){
        let res = [];
        if(params.type == "nom"){
            for (let unMaire of this.#aMaires){
                // Comment chercher un nom partiel ? (indice Regex)
                if(params.valeur != ""){
                    let reg = new RegExp(params.valeur, "i");
                    console.log(reg)
    
                    //if(reg.test(unMaire.nom) || reg.test(unMaire.prenom)){
                    if(reg.test(unMaire.prenom + ";" + unMaire.nom)){
                        //console.log(params.valeur.match(reg));
                        console.log(reg.test(unMaire.nom));
                        res.push(unMaire);
                    }
                    /*if(unMaire.nom == params.valeur || unMaire.prenom == params.valeur){
                        res.push(unMaire);
                    }*/
                }
            }
        }
        else if(params.type == "date"){
            for (let unMaire of this.#aMaires){
                
                if(unMaire.debut <= params.valeur && params.valeur <= unMaire.fin){
                    res.push(unMaire);
                }
            }
        }
        return res;
    }

    /**
     * Retourne la liste des maires trié selon les paramètres
     * @param {Object} params - Objet de paramètre
     * @param {string} params.type - Le type de tri : ["date", "nom"]
     * @param {string} params.ordre - L'ordre du tri : ["ASC", "DESC"]
     * @returns {UnMaire[]} - Tableau des résultats
     */
    listeMaires(params) {
        let mesMaires = this.#aMaires;
        if(params.type == "nom"){
            mesMaires.sort(function(a,b){
                return a.nom.localeCompare(b.nom, "fr")
            });

        }
        else if(params.type == "date"){
            mesMaires.sort(function(a,b){
                let ordre = (a.debut+a.fin) - (b.debut+b.fin);
                /*if(a.debut < b.debut){
                    ordre = -1;
                }
                else if(b.debut < a.debut){
                    ordre = 1;
                }*/
                return ordre;
            });
        }
        if(params.ordre == "DESC"){
            mesMaires.reverse();
        }
        return mesMaires;
    }

    /**
     * @returns {Number} - Le nombre d'enregistrement dans le tableau des maires
     */
    getNombreMaires(){
        return this.#aMaires.length;
    }
    
  }