
/**
 * @typedef cours
 * @type {Object[]}
 * @property {string} sigle - Le sigle du cours
 * @property {string} nom - Le nom du cours
 * @property {string} prof - Le nom de l'enseignant
 * @property {string[]} horaire - L'horaire possible
 */
 
/**
 * Tableau de donnée de type cours
 * @type {cours[]}
 */
 export const cours = [{
    sigle : "582-31F",
    nom : "Prog Inter Web 2",
    prof : "JM",
    horaire : ["8h-11h", "12h-15h"]
},{
    sigle : "582-31B",
    nom : "Prog Web Avancée",
    prof : "CJ",
    horaire : ["9h-12h", "14h-17h", "8h-11h"]
},{
    sigle : "582-31W",
    nom : "CMS",
    prof : "EM",
    horaire : ["19h-22h"]
},{
    sigle : "582-31D",
    nom : "UX UI",
    prof : "MAC",
    horaire : ["15h-18h", "8h-11h", "9h-12h", "14h-17h"]
}];
