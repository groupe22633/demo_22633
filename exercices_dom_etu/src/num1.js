window.addEventListener("DOMContentLoaded", function(){
    const btn = document.querySelector(".btn_num1");
    console.log(btn);
    btn.addEventListener("click", function(e){
        //e.currentTarget.disabled = true;
        const maDiv = document.querySelector(".maDiv");
        maDiv.classList.add("animationDiv");

        maDiv.addEventListener("animationend", function(e){
            e.currentTarget.classList.remove("animationDiv");
            //btn.disabled = false;
        }, {once: true})
    })
})
