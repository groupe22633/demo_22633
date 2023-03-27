export default class Routeur {
    // Stratégie = hashbang (/#!/)

    /**
     * exemple #routes.detail.cb = function(){}
     */
    #routes = {};
    #dataRoute = {
        routeActive : [],
        parametres : {}
    }
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
        //console.log(this.#routes)
        this.#routes['/']
    }

    naviguer (route, bRedirection){
        let regExp = /^\/.*/;
        if(!regExp.test(route)){
            route = `/${route}`;    // force le format '/route'
        }
        let hash = `#!${route}`;

        if(bRedirection){
            history.replaceState({}, "", hash);
        }
        else{
            history.pushState({}, "", hash);
        }
        this.#changeRoute(hash);
    }


    #changeRoute(hash){
        
        let route = hash.match(/#!(.*)$/)[1];
        //console.log(route);
        this.#getParametreRoute(hash);
        route = this.#dataRoute.routeActive[0];
        
        if(this.#routes[route] && this.#routes[route].cb){
            this.#routes[route].cb(this.#dataRoute);
        }
    }

    #dePopState(evt){
        //console.log(evt)
        let hash = location.hash;
        this.#changeRoute(hash);
    }

    #getParametreRoute(hash){
        // chaine type 0  : #!/ -Aucun paramètres
        // chaine type 1  : #!/route - Aucun paramètres
        // chaine type 2  : #!/route/route - Aucun paramètres
        // chaine type 3  : #!/route/?cle=valeur&cle=valeur- Un ou plusieurs paramètres
        // chaine type 4  : #!/route/route/routeN/?cle=valeur&cle=valeur- Un ou plusieurs paramètres
        // chaine type 5  : #!/route/identifiant?cle=valeur&cle=valeur- Un ou plusieurs paramètres avec un élément de route variable
        
        let route = hash.match(/#!(.*)$/)[1];

        if(route.includes("?")){    // cas ou ?cle=valeur
            
            let parametres = route.split("?");  //[ route, queryString]
            route = parametres.shift(); // Assigne la route
            parametres = parametres.shift();    // Assigne le queryString

            if(parametres.length > 1){
                //console.log(parametres)
                parametres = parametres.split("&");
                //console.log(parametres)
                parametres = parametres.map((unParametre)=>{
                    return unParametre.split("=");
                })
                //console.log(parametres)
                parametres = Object.fromEntries(parametres);
                this.#dataRoute.parametres = parametres;
            }
            
            //console.log(parametres)
        }
        if(route != "/"){
            // Si avant /route1/Route2/
            if(route.charAt(route.length-1) == "/"){    // gestion du / à la fin
                route = route.substring(0, route.length-1);
            }
            // après /route1/Route2
            let element = route.split("/");
            if(element[0] == ""){
                element.shift();
            }
            element = element.map((unElement)=>{
                return `/${unElement}`;
            })
            this.#dataRoute.routeActive = element;

        }
        else{
            this.#dataRoute.routeActive = ['/'];
        }
        
        //console.log(this.#dataRoute)
        
    }
}