// Révision des sélecteurs css : https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Selectors


window.addEventListener("load", function(){
    let input = document.querySelector("[name='message']");
    let btnSoumettre = document.querySelector("[name='soumettre']");
    let message = input.value;
    afficherNombre(message);
    // Condition initiale
    btnSoumettre.disabled = !estValide(message);
    
    input.addEventListener("input", function(e){
        let message = e.target.value;
        btnSoumettre.disabled = !estValide(message);
        afficherNombre(message);
        console.log("input", e.target.value);

        
    })



    /*document.querySelector("[name='message']").addEventListener("change", function(e){
        console.log("change", e.target.value);
    })

    document.querySelector("[name='message']").addEventListener("keypress", function(e){
        console.log("keypress", e.target.value);
        console.log(e)
    })

    document.querySelector("[name='message']").addEventListener("keyup", function(e){
        console.log("keyup", e.target.value);
    })

    document.querySelector("[name='message']").addEventListener("keydown", function(e){
        console.log("keydown", e.target.value);
    })*/
  
});


/**
 * Insère le nombre de caractères de la chaine
 * @param {String} message - Chaine de caractère à compter
 */
function afficherNombre(message){
    document.querySelector(".nombre_caractere").innerHTML = message.length;
}
/**
 * 
 * @param {String} message 
 * @returns boolean
 */
function estValide(message){
    //console.log(input);
    let valide = false;
    if(message.length <= 100 && message.length >= 20){
        valide = true;
    }
    return valide;
}
/*
function estValide(message){
    return (message.length <= 100 && message.length >= 20)
}*/