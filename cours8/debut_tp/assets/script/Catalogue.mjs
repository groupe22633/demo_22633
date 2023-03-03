export default class Catalogue {
    
    #aFilms = [];

    constructor(domParent) {
        this.domParent = domParent;
    }

    setFilms(aFilms) {
        this.#aFilms = aFilms;
    }

    afficher() {
        console.log(this.#aFilms);
        let chaineHTML = "";
        this.#aFilms.forEach((unFilm)=>{
            chaineHTML += ` <article class="carte">
                    <header>
                        <h2>${unFilm.title} (${unFilm.release_date})</h2>
                        <h3>${unFilm.original_title}</h3>
                    </header>
                    <img src="${unFilm.image}">
                    <div class="contenu">
                        <p>${unFilm.description}</p>
                    </div>
                    <footer class="action">x, y z</footer>
                </article>`;
        })

        this.domParent.innerHTML = chaineHTML;
        
    }

}