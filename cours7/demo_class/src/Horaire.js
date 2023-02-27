import { cours } from "./data.js";
export default class Horaire{
    


    constructor(elementParent){
        this.elementParent = elementParent;
        
        //this.validation();
    }

    validation(){
        console.log("validation")
        console.log(this.coursInscrits.cours)
        let valide = this.coursInscrits.cours.every(function(unCours){
            let query = `[name='${unCours}[]']:checked`;
            console.log(query)
            let boxesHoraire = document.querySelectorAll(query);
            console.log(boxesHoraire)
            return (boxesHoraire.length >= 1 );
        });
        console.log(valide)
        return valide;
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
                    chaineHTMLCours += `<p><input type="checkbox" name="${unCours.sigle}[]" value="${element}">${element}</p>`
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
                                <button type="submit" disabled>Soumettre</button>
                            </fieldset>`;
                            
        
        this.elementParent.innerHTML = chaineHTML;

       this.attacherGestionnaire();
        
    }

    attacherGestionnaire(){
        let btnSubmit = document.querySelector("[type='submit']");
        btnSubmit.addEventListener("click", this.validation.bind(this));

        let champHoraire = document.querySelector(".horaire");
        champHoraire.addEventListener("input", (evt)=>{
            if(evt.target.type == "checkbox"){
                if(this.validation()){
                    btnSubmit.disabled = false;
                }
                else{
                    btnSubmit.disabled = true;
                }
            }
            console.log(evt);
        });

    }
}