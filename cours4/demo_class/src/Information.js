
export default class Information{
    formInfo = [
        {
            nom : "nom",
            label : "Nom : ",
            type : "text",
            fctValidation : this.nonVide,
            valeur:""
        },
        {
            nom : "prenom",
            label : "Prénom : ",
            type : "text",
            fctValidation : this.nonVide,
            valeur:""
        },
        {
            nom : "courriel",
            label : "Courriel : ",
            type : "email",
            fctValidation : this.nonVide,
            valeur:""

        },
        {
            nom : "nbCours",
            label : "Nombre de cours : ",
            type : "number",
            fctValidation : this.nonVide,
            valeur:""

        }
    ]


    constructor(elementParent, nbCoursMax){
        this.nbCoursMax = nbCoursMax;
        this.elementParent = elementParent;
        //this.validation();
    }

    validation(){
        let aValide =[];
        let valide = true;
        for(let elementForm of this.formInfo){
            elementForm.valeur = document.querySelector(`[name='${elementForm.nom}']`).value;
            /*if(!elementForm.fctValidation()){
                valide = false;
            }*/
            
            aValide.push(elementForm.fctValidation());
            //console.log(elementForm)
        }
        console.log("validation")
        valide = aValide.every(function(element){
            return (element === true);
        })
        //console.log(indexFalse)
        /*if() {
                        
            valide = true;
        }*/
        console.log(valide)
        return valide;
    }

    getData(){
        return {nbCours : 3};
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

    nonVide (){
        console.log(this.valeur);
        let valide = false;
        if(this.valeur != ""){
            valide = true;
        }
        console.log(valide)
        return valide;
    }
}