import App from "./App.js"
const _app = new App();

/**
 * Une "vraie" classe
 */

function NomClasse(){
    console.log("Je suis le constructeur")
}

NomClasse.prototype.NomMethode = function(){
    console.log("allo");
}

const maClasse = new NomClasse();
maClasse.NomMethode();