import MaireXhr from "./MaireXhr.mjs";
import MaireFetch from "./MaireFetch.mjs";

export default class Application {
    
    /**
     * Constructeur de la classe Application
     * Le constructeur attache les écouteurs d'événement sur les bonnes méthodes de l'application
     */
    constructor() {
      document.querySelector(".fetch .btn-liste-nom").addEventListener("click", ()=>{
        let oFetch = new MaireFetch();
        let params = {
                      type:"nom", 
                      ordre : "asc", 
                      callback: function(data){
                        console.log(this)
                          console.log(data)
                          this.afficher(data);
                      }.bind(this)};

        oFetch.listeMaires(params);

      })
        
    }
    /**
    Mettre les autres méthodes ici.
    */
   afficher(data){
    console.log(data);
   }
  }