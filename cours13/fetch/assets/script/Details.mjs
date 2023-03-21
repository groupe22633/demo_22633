default export class Details{

    constructor(){
        this.dialogue = document.querySelector(".details");
        
        let btnFermer = document.querySelector(".details .fermer");
        btnFermer.addEventListener("click", this.fermerDialogue.bind(this));
        
        const modal = document.querySelector(".details").addEventListener("close", ()=>{
            document.querySelector("body").classList.remove("arretDefilement");
        })
    }

    ouvrir(info){
        document.querySelector("body").classList.add("arretDefilement");
        
        this.dialogue.querySelector(".id").innerHTML = info.id;
        
        this.dialogue.querySelector(".title").innerHTML = info.title;
            /*
            @todo : getCommentaires()
            @todo : afficherCommentaires()
            @todo : ajouterCommentaires()
            */
        this.dialogue.showModal();
        
    }
    fermerDialogue(evt){
        let dialogue = document.querySelector(".details");
        
        dialogue.close();
    }

}