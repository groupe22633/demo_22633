
export default class Information{
    formInfo = [
        {
            nom : "nom",
            label : "Nom : ",
            type : "text",
            fctValidation : function(){
                return true;
            }
        },
        {
            nom : "prenom",
            label : "Prénom : ",
            type : "text",
            fctValidation : function(){
                return true;
            }
        },
        {
            nom : "courriel",
            label : "Courriel : ",
            type : "email",
            fctValidation : function(){
                return true;
            }
        },
        {
            nom : "nbCours",
            label : "Nombre de cours : ",
            type : "number",
            fctValidation : function(){
                return true;
            }
        }
    ]


    constructor(elementParent, nbCoursMax){
        this.nbCoursMax = nbCoursMax;
        this.elementParent = elementParent;
        //this.validation();
    }

    validation(){
        console.log("validation")
    }

    afficher(){
        let chaineHTML = `<fieldset class="information">
                            <legend>Informations personnelles</legend>`;
        
        //this.formInfo.forEach(function(element){
        for(let element of this.formInfo){
            chaineHTML += ` <p>
                                <label for="${element.nom}">${element.label}</label>
                                <input type="${element.type}" id="${element.nom}" name="${element.nom}">
                            </p>`
        }
                          
        chaineHTML += `</fieldset>`;
        
        this.elementParent.innerHTML = chaineHTML;
        

    }
}