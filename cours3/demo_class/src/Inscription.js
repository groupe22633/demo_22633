/**
 * Class représentant le composant Inscription
 * @author Jonathan Martel <jmartel@cmaisonneuve.qc.ca>
 * @update 2023-02-14
 * @license MIT
 */

import { cours } from "./data.js";

export default class Inscription{
    /**
     * Constructeur
     * @param {DOMElement} elementParent 
     */
    constructor(elementParent){
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
        /**
         * Test de performance!
         */
        const start1 =performance.now();
        let choixCours, choixCours2, choixCours3
        for(let i=0; i<1000;i++){
            choixCours = cours.map(function(unCours){
                return `<option value="${unCours.sigle}">${unCours.nom}</option>`;
            }).join("");
        }
        const end1 = performance.now();    
        const start2 = performance.now();
        for(let i=0; i<1000;i++){
            choixCours2 = cours.reduce(function(acc, unCours){
                return acc + `<option value="${unCours.sigle}">${unCours.nom}</option>`;
             }, "");
        }
        const end2 = performance.now(); 

        const start3 = performance.now();
        for(let i=0; i<1000;i++){
            choixCours3 = "";
            for (let unCours of cours){
                choixCours3 += `<option value="${unCours.sigle}">${unCours.nom}</option>`;
            }
        }
        const end3 = performance.now(); 

        console.log(`Execution time 1: ${end1 - start1} ms`);
        console.log(`Execution time 2: ${end2 - start2} ms`);
        console.log(`Execution time 3: ${end3 - start3} ms`);
        
        console.log(choixCours, choixCours2, choixCours3)

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