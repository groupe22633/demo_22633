import { cours } from "./data.js";
export default class Inscription{
    nbCours = 4;
    coursChoisi = [];

    constructor(elementParent){
        this.elementParent = elementParent;
        //this.validation();
    }

    validation(){
        let valide = false;
        console.log("validation")
        let options = document.querySelectorAll("select option:checked");
        console.log(this)
        this.coursChoisi = [];
        options.forEach((choix)=>{
            console.log(this)
            this.coursChoisi.push(choix.value); 
        });
        if(this.nbCours == options.length){
            valide = true;
        }
        console.log(this.coursChoisi)
        return valide;
    }

    getData(){

        return {cours : ["582-31F", "582-31B"]};
    }

    setData(donnees){
        this.nbCours = 4;
        if(donnees.nbCours){
            this.nbCours = donnees.nbCours;
        }
        
    }
    afficher(){
        let choixCours = cours.map(function(unCours){
            return `<option value="${unCours.sigle}">${unCours.nom}</option>`;
        }).join("");

        let chaineHTML = `<fieldset class="inscription">
        <legend>Inscriptions</legend>
        <p>Vous pouvez choisir ${this.nbCours} cours</p>
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