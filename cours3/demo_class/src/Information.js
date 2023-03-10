/**
 * Class représentant le composant Information
 * @author Jonathan Martel <jmartel@cmaisonneuve.qc.ca>
 * @update 2023-02-14
 * @license MIT
 */

export default class Information{
    /**
     * @typedef champ
     * @type {Object[]}
     * @property {string} nom - La valeur du name
     * @property {string} label - Le texte affiché comme étiquette
     * @property {string} type - Le type du champs [text, number, email, ...]
     * @property {function | function[]} fctValidation - une ou plusieurs fonction de validation
     */

    /**
     * Information des champs à afficher
     * @type champ
     */
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

    /**
     * Constructeur
     * @param {DOMElement} elementParent 
     * @param {Number} nbCoursMax 
     */
    constructor(elementParent, nbCoursMax){
        this.nbCoursMax = nbCoursMax;
        this.elementParent = elementParent;
        //this.validation();
    }
    
    /**
     * Méthode qui lance la validation du composant
     * @returns Boolean
     */
    validation(){
        console.log("validation")
        return true
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
                                <input type="${element.type}" id="${element.nom}" name="${element.nom}">
                            </p>`
        }
                          
        chaineHTML += `</fieldset>`;
        
        this.elementParent.innerHTML = chaineHTML;
        

    }
}