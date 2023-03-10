import Maire from "../src/Maire.mjs";
import { mairesMTL } from "../src/mairesdata.mjs";
import { assert, expect} from "chai";

describe("Test de la classe Maire", ()=>{
    describe("méthode getNombreMaire()", ()=>{
        it("Vérifier que la fonction retourne un nombre (Maire())", ()=>{
            
            let oMaire = new Maire();
            expect(oMaire.getNombreMaires()).to.be.an('number');
        })
        it("Vérifier que la fonction retourne un nombre (Maire([]))", ()=>{
            for(let i=0; i<9999; i++){
                let oMaire = new Maire([]);
                expect(oMaire.getNombreMaires()).to.be.an('number');
            }
                
        })
        it("Vérifier que la fonction retourne un nombre (Maire(maireMTL))", ()=>{
            let oMaire = new Maire(mairesMTL);
            expect(oMaire.getNombreMaires()).to.be.an('number');
        })
        it("Vérifier que la fonction retourne la longueur du tableau", ()=>{
            let oMaire = new Maire(mairesMTL);
            const longueurAttendu = mairesMTL.length;
            expect(oMaire.getNombreMaires()).to.equal(longueurAttendu);
        })
    })

    describe("Maire.listeMaire()", ()=>{
        it("Par date, ASC", ()=>{
            const param = {type:"date", ordre: "ASC"};
            let oMaire = new Maire(mairesMTL);
            expect(oMaire.listeMaires(param))
                .to.be.an("array")
                .to.have.lengthOf(mairesMTL.length);
            
            expect(oMaire.listeMaires(param))
                .to.have.members(mairesMTL);
            const membres = [
                {
                    "nom": "Viger",
                    "prenom": "Jacques",
                    "debut": 1833,
                    "fin": 1836
                },
                {
                    "nom": "McGill",
                    "prenom": "Peter",
                    "debut": 1840,
                    "fin": 1842
                }
            ]
            expect(oMaire.listeMaires(param))
                .to.deep.include.ordered.members(membres);
        })
    })
})