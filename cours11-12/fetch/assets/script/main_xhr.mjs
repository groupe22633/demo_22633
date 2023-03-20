import App from "./App.mjs";


window.addEventListener("load", function(){
    
    const url = "https://us-central1-ghibliapi-31f.cloudfunctions.net/app/";
    
    /**** 
     * AJAX : Asynchronous Javascript and XML <xml><noeud></noeud></xml>
     * Première technique : Ancienne, mais encore pertinente 
     * XHR
     * */
    let data = [];
    console.log("xhr")
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function(evt){
        console.log("readystate", evt.target);
        if(evt.target.status == "200" && evt.target.readyState == "4"){
            console.log("fin")
            //console.log(evt.target.response);
            data= JSON.parse(evt.target.response); // Conversion de la chaine en objet
            console.log(data);
            // Afficher les données
        }
    })

    xhr.addEventListener("load", function(evt){
        console.log("load");
        data= JSON.parse(evt.target.response); // Conversion de la chaine en objet
        console.log(data);
        // Afficher les données
    
    })

    xhr.open("GET", url+"films");
    xhr.send();

    // Où sont mes données ?
    console.log(data);  // Je n'ai pas encore reçu les données...
})



