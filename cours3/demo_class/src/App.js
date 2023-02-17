/**
 * Classe qui représente l'application. 
 * Elle s'occupe de gérer les composants, leur dépendance et les appels à l'affichage.
 * @author Jonathan Martel <jmartel@cmaisonneuve.qc.ca>
 * @update 2023-02-14
 * @license MIT
 */
//import { cours } from "./data.js";
import Information from "./Information.js";
import Inscription from "./Inscription.js";


export default class App{
    /**
     * Défini le maximun de cours pouvant être choisi
     * @type Number
     * @private
     */
    #nbCoursMax = 4;        
    
    /**
     * Constructeur de l'application
     */
    constructor(){
        //console.log("allo je suis App")
        
        let elementParent = document.querySelector("main"); // Le point d'insertion dans le DOM pour l'ensemble des composants

        let panneauInfo = new Information(elementParent, this.#nbCoursMax); // Création du composant Information et passage des dépendances
        let panneauInscription = new Inscription(elementParent);    // Création du composant Inscription
        panneauInfo.afficher();         // Affichage du composant Information (écrase ce qui est dans le DOM (<main>))
        panneauInscription.afficher();      // Affichage du composant Information (écrase ce qui est dans le DOM (<main>))
        
        //elementParent.innerHTML = htmlInfo;



    }



}
