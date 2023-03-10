import Maire from "../src/Maire.mjs";
import { mairesMTL } from "../src/mairesdata.js";

mocha.setup("bdd");
const assert = chai.assert;
const expect = chai.expect;

describe("Test des méthodes de la classe Maire", () => {
    const oMaire = new Maire(mairesMTL);
    describe("Maire.getNombreMaires()", () => {
        it("Vérifier que la fonction retourne un nombre", () => {
            expect(oMaire.getNombreMaires()).to.be.an("Number");
        });
        it("Vérifier que le nombre de maire est valide", () => {
            const expectLongueur = mairesMTL.length;
            expect(oMaire.getNombreMaires()).to.be.equal(expectLongueur);
            //assert.equal(oMaire.getNombreMaires(), expectLongueur);
        });

    });

    describe("Maire.rechercheMaires()", () => {
        it("Par date : 1800 (0 maire)", () => {
            let param = { type: "date", valeur: 1800 };
            expect(oMaire.rechercheMaires(param))
                .to.be.an("Array")
                .to.have.lengthOf(0);
        });
        it("Par date : 2030 (1 maire)", () => {
            let param = { type: "date", valeur: 2030 };
            expect(oMaire.rechercheMaires(param))
                .to.be.an("Array")
                .to.have.lengthOf(1);
        });
        it("Par date : 2013 (3 maires)", () => {
            let param = { type: "date", valeur: 2013 };
            expect(oMaire.rechercheMaires(param))
                .to.be.an("Array")
                .to.have.lengthOf(3);
        });


    })

    describe("Maire.listeMaires()", () => {
        it("Par date : ASC", () => {
            let param = { type: "date", ordre: "ASC" };
            expect(oMaire.listeMaires(param))
                .to.be.an("Array")
                .to.have.lengthOf(mairesMTL.length);

            expect(oMaire.listeMaires(param))
                .to.have.members(mairesMTL);
            
            let data = [
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
            }];
            
            expect(oMaire.listeMaires(param))
                .to.deep.include.ordered.members(data);
        });

        it('Par : { type: "data", ordre: "" }', () => {
            let param = { type: "data", ordre: "" };
            expect(oMaire.listeMaires(param))
                .to.be.an("Array")
                //.to.have.lengthOf(0);
        });
    })
});

mocha.run();



