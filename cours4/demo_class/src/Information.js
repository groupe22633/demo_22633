
export default class Information{
    formInfo = [
        {
            nom : "nom",
            label : "Nom : ",
            type : "text",
            fctValidation : [this.nonVide, this.texte],
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
            
            if(Array.isArray(elementForm.fctValidation)){
                for(let fct of elementForm.fctValidation){
                    aValide.push(fct.bind(elementForm)());    
                }
            }else{
                aValide.push(elementForm.fctValidation());
            }
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
        let data = this.formInfo.find(function(element){
            let bTrouve = false;
            if(element.nom == "nbCours"){
                bTrouve = true;
            }
            return bTrouve;
        })
        console.log(data)
        return {nbCours : data.valeur};
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

    texte(){
        console.log(this)
        let valide = false;
        
        if(this.valeur.length >=2){
            valide = true;
        }
        console.log(valide)
        return valide;
    }
}