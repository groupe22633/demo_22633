import { cours } from "./data.js";
import Information from "./Information.js";
import Inscription from "./Inscription.js";


export default class App{
    #nbCoursMax = 4;
    
    constructor(){
        console.log("allo je suis App")
        console.log(cours);
        
        let elementParent = document.querySelector("main");
        let panneauInfo = new Information(elementParent, this.#nbCoursMax);
        let panneauInscription = new Inscription(elementParent);
        panneauInfo.afficher();
        panneauInscription.afficher();
        
        //elementParent.innerHTML = htmlInfo;



    }



}
