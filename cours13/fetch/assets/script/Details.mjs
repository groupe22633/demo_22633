export default class Details{

    constructor(){
        this.dialogue = document.querySelector(".details");
        
        let btnFermer = document.querySelector(".details .fermer");
        btnFermer.addEventListener("click", this.fermer.bind(this));
        
        const modal = document.querySelector(".details").addEventListener("close", ()=>{
            document.querySelector("body").classList.remove("arretDefilement");
        })
    }

    ouvrir(info){
        document.querySelector("body").classList.add("arretDefilement");
        
        // À refaire, c'est mal fait.
        this.dialogue.querySelector(".id").innerHTML = info.id;
        this.dialogue.querySelector(".title").innerHTML = info.title;
            /*
            @todo : getCommentaires()
            @todo : afficherCommentaires()
            @todo : ajouterCommentaires()
            */
        this.dialogue.showModal();
        
    }
    fermer(){
        this.dialogue.close();
    }

}