import App from "./App.mjs";


window.addEventListener("load", function(){
    
    const url = "https://us-central1-ghibliapi-31f.cloudfunctions.net/app/";
    
    /**** 
     * AJAX : Asynchronous Javascript and XML
     * seconde technique : Fetch
     * */
    let data = [];
    console.log("fetch")
    fetch(url+"films")
        .then(function(reponse){
            return reponse.json();
        })
        .then(function(donnees){
           data = donnees;
           console.log(donnees)
        });

    fetch(url+"films")
        .then(reponse=>reponse.json())
        .then(donnees=>{
           data = donnees;
           console.log(donnees)
        });

    console.log(data);
    
})
