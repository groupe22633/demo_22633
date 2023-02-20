import { cours } from "./data.js";
export default class Horaire{
    


    constructor(elementParent){
        this.elementParent = elementParent;
        //this.validation();
    }

    validation(){
        console.log("validation")
    }
   
    afficher(){
      
        let chaineHTML =    `<fieldset class="horaire">
                                <legend>Horaire</legend>
                                <p><label>Horaire préférence : </label></p>
                                <p><input type="checkbox" name="horaire[]" value="8">8h-11h</p>
                            </fieldset>`;
        
        this.elementParent.innerHTML = chaineHTML;
        

    }
}