window.addEventListener("DOMContentLoaded", ()=>{
    const section = document.querySelector(".liste-item");
    
    document.querySelector(".num3 form").addEventListener("submit", function(e){
        e.preventDefault();

        const input = document.querySelector("[name='item']");
        const item = input.value;
        input.value = "";
        const section = document.querySelector(".liste-item");
        const elItem = `<div class="item"><span class="nom">${item}</span> <span class="btn fleche-haut"></span><span class="btn fleche-bas"></span></div>`
        section.insertAdjacentHTML("afterbegin", elItem)
        const monItem =section.firstElementChild;
        monItem.classList.add("animApparaitre")
        monItem.addEventListener("animationend", function(e){
            e.currentTarget.classList.remove("animApparaitre");
        }, {once:true})
        console.log(item)
        


    })






    console.log(section)
    section.addEventListener("click", function(e){
        console.log(e.currentTarget, e.target);
        const elClic = e.target;
        if(elClic.classList.contains("btn")){
            const item = elClic.parentElement;
            const section = item.parentElement;
            if(elClic.classList.contains("fleche-haut")){
               section.insertBefore(item, item.previousElementSibling);
               console.log("haut")
            }
            else if(elClic.classList.contains("fleche-bas")){
                section.insertBefore(item.nextElementSibling, item);
                console.log("base")
            }
        }
        
    })

})