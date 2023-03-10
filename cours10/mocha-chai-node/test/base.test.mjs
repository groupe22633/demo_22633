import Maire from "../src/Maire.mjs";
import { mairesMTL } from "../src/mairesdata.mjs";
import { assert, expect} from "chai";

describe("Test des données de base", ()=> {
    it("Est-ce que j'ai 55 enregistrements dans le tableau?", ()=> {
        //assert.equal(mairesMTL.length, 55);
        //expect(mairesMTL.length).to.be.equal(55);
        expect(mairesMTL).to.be.an('array').and.also.to.have.lengthOf(55);
    });

    it("Contient Valérie Plante", ()=> {
        const val = {nom:"plante", prenom : "Valérie", debut : 2017, fin:null};
        expect(mairesMTL).to.deep.include(val);
    });
})