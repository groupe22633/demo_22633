
export default class Information{
    formInfo = [
        {
            nom : "nom",
            label : "Nom : ",
            type : "text",
            fctValidation : [this.nonVide, this.texte],
            valeur:"aa"
        },
        {
            nom : "prenom",
            label : "Prénom : ",
            type : "text",
            fctValidation : this.nonVide,
            valeur:"bb"
        },
        {
            nom : "courriel",
            label : "Courriel : ",
            type : "email",
            fctValidation : this.nonVide,
            valeur:"a@a.com"

        },
        {
            nom : "nbCours",
            label : "Nombre de cours : ",
            type : "number",
            fctValidation : this.nonVide,
            valeur:"2"

        }
    ]

    /**
     * Constructeur
     * @param {DOMElement} elementParent  Point d'insertion du DOM
     * @param {number} nbCoursMax Valeur max pour "Nombre de cours"
     */
    constructor(elementParent, nbCoursMax){
        this.nbCoursMax = nbCoursMax;
        this.elementParent = elementParent;
        //this.validation();
    }
    /**
     * permet de lancer la validation du composant. Appelé par App
     * @returns boolean
     */
    validation(){
        let aValide =[];
        let valide = true;
        
        // pour chaque élément dans notre formulaire
        for(let elementForm of this.formInfo){
            elementForm.valeur = document.querySelector(`[name='${elementForm.nom}']`).value;   // Lire la valeur
            
            // Est-ce qu'il y a un tableau ou une fonction de validation
            if(Array.isArray(elementForm.fctValidation)){
                // Appel chaque fonction une après l'autre
                for(let fct of elementForm.fctValidation){
                    aValide.push(fct.bind(elementForm)());    // Appel de chaque fonction, en lui donnant explicitement la référence à this (l'objet dans le tableau formInfo)
                }
            }else if(elementForm.fctValidation){ // Une seule fonction de validation
                aValide.push(elementForm.fctValidation());
            }
            
        }
        //console.log("validation")
        // Si tous les champs sont valides
        valide = aValide.every(function(element){
            return (element === true);
        });
       
        //console.log(valide)
        return valide;
    }
    /**
     * Retourne les informations que le composant expose
     * @returns {objet} 
     */
    getData(){
        // Récupère la valeur de "nbCours"
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

     /**
     * Méthode d'affichage du composant
     */
    afficher(){
        let chaineHTML = `<fieldset class="information">
                            <legend>Informations personnelles</legend>`;
        
        //this.formInfo.forEach(function(element){
        for(let element of this.formInfo){
            chaineHTML += ` <p>
                                <label for="${element.nom}">${element.label}</label>
                                <input type="${element.type}" id="${element.nom}" name="${element.nom}" value=${element.valeur}>
                            </p>`
        }
                          
        chaineHTML += `</fieldset>`;
        
        this.elementParent.innerHTML = chaineHTML;
        

    }
    /**
     * Méthode de validation des valeurs
     * @returns boolean
     */
    nonVide (){
        //console.log(this.valeur);
        let valide = false;
        if(this.valeur != ""){
            valide = true;
        }
        //console.log(valide)
        return valide;
    }
    /**
     * Méthode de validation des valeurs
     * @returns boolean
     */
    texte(){
        //console.log(this)
        let valide = false;
        
        if(this.valeur.length >=2){
            valide = true;
        }
        //console.log(valide)
        return valide;
    }
}