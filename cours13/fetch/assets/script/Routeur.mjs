export default class Routeur {
    // Stratégie = hashbang (/#!/)

    /**
     * exemple #routes.detail.cb = function(){}
     */
    #routes = {};
    
    /**
     * Ajoute une nouvelle route
     * @param {String} route 
     * @param {function} fctRappel 
     */
    ajouterRoute(route, fctRappel){
        this.#routes[route] = {cb : fctRappel};
    }

    demarrer(){
        window.addEventListener("popstate", this.#dePopState.bind(this));
        
        document.addEventListener("click", (evt)=>{
            if(evt.target.tagName === "A" && evt.target.href.includes("#!/")){
                let lien = evt.target;
                let hash = lien.hash;
                history.pushState({}, "", hash);
                this.#changeRoute(hash);
            }
        })

        let hash = location.hash;
        if(!hash.includes("#!/")){
            hash = "#!/";
        }
        history.pushState({}, "", hash);
        this.#changeRoute(hash);

    }

    #changeRoute(hash){
        
        let route = hash.match(/#!(.*)$/)[1];
        console.log(route);
        if(this.#routes[route] && this.#routes[route].cb){
            this.#routes[route].cb();
        }
    }

    #dePopState(evt){
        console.log(evt)
        let hash = location.hash;
        this.#changeRoute(hash);
    }

}