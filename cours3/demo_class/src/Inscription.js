import { cours } from "./data.js";
export default class Inscription{
    


    constructor(elementParent){
        this.elementParent = elementParent;
        //this.validation();
    }

    validation(){
        console.log("validation")
    }

    afficher(){
        let choixCours = cours.map(function(unCours){
            return `<option value="${unCours.sigle}">${unCours.nom}</option>`;
        }).join("");

        let chaineHTML = `<fieldset class="inscription">
        <legend>Inscriptions</legend>
        <p><label for="nbCours">Cours:</label>
            <div class="selectCours">
            <select multiple>
               ${choixCours}
            </select>
            </div>
        </p>
    </fieldset>`;
        
        this.elementParent.innerHTML = chaineHTML;
        

    }
}