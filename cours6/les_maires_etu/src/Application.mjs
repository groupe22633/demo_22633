import Maire from "./Maire.mjs";
import { mairesMTL } from "./mairesdata.js";

export default class Application {
    
    /**
     * Constructeur de la classe Application
     * Le constructeur attache les écouteurs d'événement sur les bonnes méthodes de l'application
     * Il instancie l'objet Maire.
     */
    constructor() {
        console.log(mairesMTL);
        this.maire = new Maire(mairesMTL);
        document.querySelector(".btn-liste-nom").addEventListener("click", this.listeNom.bind(this));
        document.querySelector(".btn-recherche-nom").addEventListener("click", this.rechercheNom.bind(this));
        
    }

    listeNom(){
        console.log("listeNom");
        let param = {
                        type:'nom', 
                        ordre:"ASC"
                    };

        let aRes = this.maire.listeMaires(param);
        console.log(aRes)
        this.afficher(aRes);

    }

    rechercheNom(){
        console.log("rechercheNom");

        let param = {
                        type:'nom', 
                        valeur: "Hou"
                    };

        let aRes = this.maire.rechercheMaires(param);
        console.log(aRes)
        this.afficher(aRes);

    }

    afficher(data){
        console.log(data)
        let chaineHTML = "";
        data.forEach(function(maire){
            chaineHTML+= `<tr>
                <td>${maire.nom}</td><td>${maire.prenom}</td><td>${maire.debut}</td><td>${maire.fin}</td>
                </tr>`;
        })
        document.querySelector("table tbody").innerHTML = chaineHTML;
    }
    /**
    Mettre les autres méthodes ici.
    */
  }