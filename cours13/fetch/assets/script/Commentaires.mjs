export default class Commentaires{

    #url = "http://localhost:8080/wscommentaires/commentaires/";

    getCommentaires(id, cb){
        fetch(this.#url + id)
        //fetch("http://localhost:8080/wscommentaires/commentaires/1")
            .then(data=>data.json())
            .then((data)=>{
                cb(data);
            })
    }

    ajouterCommentaire(info, cb){
        const options = {
            method: 'POST', 
            body: JSON.stringify(info), 
            mode: 'cors'
        };

        fetch(this.#url + info.id, options)
            .then((data) => data.json())
            .then((data) => cb(data));
            
    }

}