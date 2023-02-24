import { cours } from "./data.js";
import Horaire from "./Horaire.js";
import Information from "./Information.js";
import Inscription from "./Inscription.js";


export default class App{
    /**
     * @private
     * Nombre de cours limite dans l'application
     */
    #nbCoursMax = 4;
    /**
     * @private
     * Composant actif
     */
    #indexComposant = 0;
    /**
     * @private
     * Tableau des composants
     */
    #aComposant = [];
    
    /**
     * Constructeur de l'app
     */
    constructor(){
        
        const elementParent = document.querySelector(".app");       // récupèration du DomElmeent pour insérer les composants
        const btnSuivant = document.querySelector(".btn.suivant");  // Récupération du bouton "suivant"
        const btnPrecedent = document.querySelector(".btn.precedent");  // Récupération du bouton "precedent"
        btnSuivant.addEventListener("click", this.suivant.bind(this));  // Attacher la méthode suivant (il faut attacher le this pour le fixer à sa valeur de déclaration et non pas sa valeur d'appel)
        btnPrecedent.addEventListener("click", this.precedent.bind(this));  // Attacher la méthode precedent (il faut attacher le this pour le fixer à sa valeur de déclaration et non pas sa valeur d'appel)
        //document.querySelector("[type='submit']").disabled = true;      // Désactive le bouton soumettre
        
        // Instanciation des composants
        const panneauInfo = new Information(elementParent, this.#nbCoursMax);
        const panneauInscription = new Inscription(elementParent);
        const panneauHoraire = new Horaire(elementParent);
        
        // Ajout des composants dans le caroussel 
        this.#aComposant.push(panneauInfo);
        this.#aComposant.push(panneauInscription);
        this.#aComposant.push(panneauHoraire);
        this.#aComposant[this.#indexComposant].afficher();  // Affiche le premier composant

        //this.test();
        //panneauInfo.afficher();
        //panneauInscription.afficher();
        //panneauHoraire.afficher();
        
        //elementParent.innerHTML = htmlInfo;

        this.gererBtn();

    }
    /**
     * Pour tester le this (pas utile)
     */
    test(){
        console.log(this)
    }
    /**
     * Méthode attaché sur le bouton suivant. Gère les changements de composant et le passage de valeur entre composant
     */
    suivant(){
        //this.#aComposant.push(this.#aComposant.shift());
        //this.#aComposant[0].afficher();
        //console.log(this)
        let data;   // Tableau de données temporaire pour le passage entre les composants
        let composantActif = this.#aComposant[this.#indexComposant];    // le composant qui est actif
        
        if(composantActif.validation()){    // Si le composant est valide (après le suivant)
            if(composantActif.getData){     // S'il a la méthode getData
                data = composantActif.getData();    // Lire les données
            }
            //console.log(data)
            if(this.#indexComposant < this.#aComposant.length-1){   // Est-ce que c'est le dernier composant de la liste ?
                this.#indexComposant++;     //  Passe au prochain
                composantActif = this.#aComposant[this.#indexComposant];    // Prochain devient le composant actif
            }
            else{   // Fin de la séquence
                //@todo Régler le bug pour suivant qui reste lorsque le dernier panneau est affiché
                document.querySelector(".btn.suivant").disabled = true;
                document.querySelector("[type='submit']").disabled = false;
            }
            
            if(composantActif.setData){ // Si le composant à un setData
                composantActif.setData(data);   // Passe les données précédentes
            }
            composantActif.afficher();  // Affiche le composant
            this.gererBtn();
        }
        //console.log("suivant")
    }

    precedent(){
        this.#indexComposant--;
        let composantActif = this.#aComposant[this.#indexComposant];    // le composant qui est actif
        console.log(composantActif);
        composantActif.afficher();
        
        this.gererBtn();
    }

    gererBtn(){
        if(this.#indexComposant == 0){
            document.querySelector(".btn.suivant").disabled = false;
            document.querySelector(".btn.precedent").disabled = true;
        }
        else if(this.#indexComposant == this.#aComposant.length-1){
            document.querySelector(".btn.suivant").disabled = true;
            document.querySelector(".btn.precedent").disabled = false;
            
        }
        else{
            document.querySelector(".btn.suivant").disabled = false;
            document.querySelector(".btn.precedent").disabled = false;
        }
    }


}
