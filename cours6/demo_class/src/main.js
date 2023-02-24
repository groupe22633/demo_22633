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


// Petit précis de fonction fléché

function nomme (){

}
let presqueNomme = function(){

}

function fct(salutation){
    return salutation;
}

// Et maintenant la fonction fléchée
/*
(param)=>{
    return 
}

let fctFleche = (param)=>{
    return param;
}

const addition = (a,b)=>{
    return a+b;
}

const addition2 = function (a, b){
    return a+b;
}
console.log(addition2(1,2));

const addition3 = a =>(a*2 >10? true : false);

console.log(addition3(10,3));
*/