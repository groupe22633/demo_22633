import Commentaires from "./Commentaires.mjs";

export default class Details{
    #oCommentaire;
    constructor(){
        this.dialogue = document.querySelector(".details");
        
        let btnFermer = document.querySelector(".details .fermer");
        btnFermer.addEventListener("click", this.fermer.bind(this));
        
        const modal = document.querySelector(".details").addEventListener("close", ()=>{
            document.querySelector("body").classList.remove("arretDefilement");
        })

        this.#oCommentaire = new Commentaires();
        this.dialogue.querySelector("[name='commentaire']").addEventListener("submit", (evt)=>{
            evt.preventDefault();
            let fdCommentaire = new FormData(this.dialogue.querySelector("[name='commentaire']"));
            console.log(fdCommentaire);
            let data = {};
            fdCommentaire.append("id", this.info.id )
            fdCommentaire.append("nom", "allo" )
            fdCommentaire.append("prenom", "toi" )
            fdCommentaire.append("pays", "canada" )
            fdCommentaire.append("etat", "quebec" )
            fdCommentaire.append("ville", "montreal" )
            
            fdCommentaire.forEach((valeur, cle)=>{
                data [cle] = valeur;
                console.log(cle, valeur);
            })
            /*const data = {
                "id":"1",
                "nom":"Martel",
                "prenom":"Jonathan",
                "courriel":"",
                "pays":"Canada",
                "etat":"Québec",
                "ville":"Montréal",
                "commentaire":"Ceci est un commmentaire court"
              }*/
              console.log(data)
              this.#oCommentaire.ajouterCommentaire(data, (data)=>{
                console.log(data);
                this.#oCommentaire.getCommentaires(this.info.id, (commentaires)=>{
                    console.log(commentaires)
                    this.afficherCommentaires(commentaires);
                })
              })

        })
    }

    ouvrir(info){
        document.querySelector("body").classList.add("arretDefilement");
        this.info = info;
        // À refaire, c'est mal fait.
        this.dialogue.querySelector(".id").innerHTML = info.id;
        this.dialogue.querySelector(".title").innerHTML = info.title;
        this.#oCommentaire.getCommentaires(info.id, (commentaires)=>{
            console.log(commentaires)
            this.afficherCommentaires(commentaires);
        })
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

    afficherCommentaires(aCommentaires){
        let sectionCommentaire = this.dialogue.querySelector(".commentaires");
        let chaineHTML = "";
        for (let unCommentaire of aCommentaires){
            chaineHTML += `<p>${unCommentaire.courriel} a dit :</p>`;
            chaineHTML += `<p>${unCommentaire.commentaire}</p>`;
        }
        sectionCommentaire.innerHTML = chaineHTML;
    }

}