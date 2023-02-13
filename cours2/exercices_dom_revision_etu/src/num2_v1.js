window.addEventListener("load", function(){
    let aItems = document.querySelectorAll(".item")
    for (const item of aItems){
        item.addEventListener("click", function(e){
            console.log(e.target);
            let cible = e.target;
            if(cible.classList.contains("tri")){
                cible = cible.nextElementSibling;
            }
            if(cible.classList.contains("btn"))
            {
                if(cible.classList.contains("fleche-haut")){
                    cible.classList.replace("fleche-haut", "fleche-bas");
                }
                else{
                    cible.classList.replace("fleche-bas","fleche-haut");
                }
            }

        })
        //console.log(item);
    }



})