import { cours } from "./data.js";
export default class Horaire{
    


    constructor(elementParent){
        this.elementParent = elementParent;
        //this.validation();
    }

    validation(){
        console.log("validation")
    }
    /**
     * 
     * @param {Object} coursInscrits - Contient la liste des sigles des cours inscrits
     */
    setData(coursInscrits){
        this.coursInscrits = coursInscrits;
        console.log(coursInscrits);

    }

    afficher(){
        let chaineHTMLCours = "";
        let mesCours = this.coursInscrits.cours;
        //console.log(this.coursInscrits.cours)
        cours.forEach(function(unCours) {
            if(mesCours.includes(unCours.sigle)){
                //console.log(unCours);
                chaineHTMLCours +=`<p>${unCours.nom}</p>`;
                unCours.horaire.forEach(function(element){
                    chaineHTMLCours += `<p><input type="checkbox" name="horaire[]" value="${element}">${element}</p>`
                })
            }
        });

        /*let chaineHTMLCours = "";
        this.coursInscrits.cours.forEach(function(unCours) {
            chaineHTMLCours +=`<p>${unCours}</p>`;
            let aCoursChoisis = cours.filter(function(element){
                return (element.sigle == unCours);
            });
            console.log(aCoursChoisis)
            aCoursChoisis.forEach(function(element){
                element.horaire.forEach(function(element){
                    chaineHTMLCours += `<p><input type="checkbox" name="horaire[]" value="8">${element}</p>`
                })
            })
        });*/


        let chaineHTML =    `<fieldset class="horaire">
                                <legend>Horaire</legend>
                                <p><label>Horaire préférence : </label></p>
                                ${chaineHTMLCours}
                                <p><input type="checkbox" name="horaire[]" value="8">8h-11h</p>
                            </fieldset>`;
        
        this.elementParent.innerHTML = chaineHTML;
        

    }
}