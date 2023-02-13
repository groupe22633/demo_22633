window.addEventListener("DOMContentLoaded", ()=>{
    const section = document.querySelector(".num2 > section");
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