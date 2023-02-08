const listeItem = [
    {
        id:1,
        item : "Mon item 9",
        barre : true,
    },
    {
        id:2,
        item : "Mon item 2",
        barre : false,
    },
    {
        id:3,
        item : "Mon item 3",
        barre : true,
    },
    {
        id:4,
        item : "Mon item 30",
        barre : true,
    },
    {
        id:5,
        item : "Mon item 4",
        barre : false,
    },
    {
        id:6,
        item : "Mon item 5",
        barre : false,
    },
    {
        id:7,
        item : "Mon item 6",
        barre : false,
    }
];  


window.addEventListener("load", function(){
   
   let chaineHTML = "";
   let mesItems = document.querySelector(".liste-item");
    mesItems.addEventListener("click", function(e){
        let cible = e.target;
        console.log(cible)

        if(cible.type=="checkbox"){
            let id = cible.parentElement.dataset.id;
            console.log(cible.checked)
            let itemSelectionne = listeItem.find(function(element){
                return (element.id == id);
            })
            itemSelectionne.barre = cible.checked;
            
            rendu();
            /*if(cible.parentElement.classList.contains("barre"))
            {
                cible.parentElement.classList.remove("barre");
            }
            else{
                cible.parentElement.classList.add("barre");
            }*/
        }
    })
    let aItems = document.querySelector(".liste-tri").addEventListener("click", function(e){
        console.log(e.target);
        let cible = e.target;
        let type = "";
        if(cible.classList.contains("tri")){
            cible = cible.nextElementSibling;
            console.log(cible.dataset.tri)
            type = cible.dataset.tri;
        }
        if(cible.classList.contains("btn"))
        {
            
            if(cible.classList.contains("fleche-haut")){
                cible.classList.replace("fleche-haut", "fleche-bas");
                trierItem("ASC", type);
            }
            else{
                cible.classList.replace("fleche-bas","fleche-haut");
                trierItem("DESC", type);
            }
            
            rendu();
        }


    });


    document.querySelector(".ajout-item form").addEventListener("submit", function(e){
        e.preventDefault();
        console.log(e)
        let nouvItem = document.querySelector("[name='item']");
        let valeurItem = nouvItem.value;
        if(valeurItem){
            let oItem =  {
                            id:listeItem.length+1,
                            item : valeurItem,
                            barre : false,
                        }
                        listeItem.unshift(oItem);
            nouvItem.value = "";
        }
        rendu();

    })


    rendu();

});

function rendu(){
    let domListeItem = document.querySelector(".liste-item");
    let chaineHTML = "";
    for(const item of listeItem){
        let check = (item.barre ? "checked" : "" );
        let barre = (item.barre ? "barre" : "" );
    
        chaineHTML += `<div class="item ${barre}" data-id="${item.id}">
                            <input type="checkbox" ${check}>
                            <span class="nom">${item.item}</span>
                            <span class="btn fleche-haut"></span>
                            <span class="btn fleche-bas"></span>
                        </div>`;
       }
       domListeItem.innerHTML = chaineHTML;
}


function trierItem(ordre, type){
   if(type == ""){
    type = "item";
   }
   console.log(type)
    listeItem.sort(function(a,b){
        let valeur = 0;
        //console.log(a, b)
        if(a[type] < b[type]){
            valeur = -1;
        }
        else if(a[type] > b[type]){
            valeur = 1;
        }
        return valeur;
    }); 

    if(ordre == "DESC"){
        listeItem.reverse();
    }
   
    console.log(listeItem)
}