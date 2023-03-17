export default class Ghibli{
    //URLGhibli = "https://ghibliapi.herokuapp.com/";
    URLGhibli = "https://us-central1-ghibliapi-31f.cloudfunctions.net/app/";


    /**
     * 
     * @param {function} cb - Fonction de rappel qui prendra les données en paramètre     
     */
    getFilms(cb){
       // À essayer avec fetch
       /**
        * fetch. then .then ( cb(data))
        */

    }
    /**
     * 
     * @returns Promesses
     */
    getFilmsPromise(){
       
    }
    /**
     * 
     * @returns array
     */
    async getFilmsAsync(){
        
    }

    /**
     * 
     * @param {function} cb - Fonction de rappel
     */
    getFilmsXHR(cb){
       const xhr = new XMLHttpRequest();
       xhr.addEventListener("load", function(){
        const data = JSON.parse(xhr.response);
        cb(data);
        //console.log(xhr.response)
       })
       xhr.open("GET", this.URLGhibli+ "films");
       xhr.send();
    }

    


}