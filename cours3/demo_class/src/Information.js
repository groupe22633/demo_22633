
export default class Information{
    constructor(elementParent){
        this.elementParent = elementParent;
        //this.validation();
    }

    validation(){
        console.log("validation")
    }

    afficher(){
        let chaineHTML = `<fieldset class="information">
                            <legend>Informations personnelles</legend>
                            <p><label for="nom">Nom :</label><input type="text" name="nom"></p>
                            <p><label for="courriel">Courriel :</label><input type="email" name="courriel"></p>
                            <p><label for="nbCours">Nombre de cours :</label><input type="number" name="nbCours"></p>
                          </fieldset>`;
        this.elementParent.innerHTML = chaineHTML;
                          //return chaineHTML;

    }
}