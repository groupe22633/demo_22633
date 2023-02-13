import { cours } from "./data.js";
import Information from "./Information.js";



export default class App{
    #nbCoursMax = 4;
    
    constructor(){
        console.log("allo je suis App")
        console.log(cours);
        
        let elementParent = document.querySelector("main");
        let panneauInfo = new Information(elementParent, this.#nbCoursMax);
        panneauInfo.afficher();
        //elementParent.innerHTML = htmlInfo;



    }



}
