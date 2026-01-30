// --- SECTION 1 : INITIALISATION DES DONNÉES ---
// On regroupe toutes les définitions d'objets et de tableaux en premier

const Nom_Classe = "B1-A";
let Nombre_Eleve = 28;
let Classe_Ouverte = true;

let Eleve_1 = {
    prenom: "Baptiste",
    notes: { math: 14, francais: 12 }
};

let eleves = [
    { prenom: "Virgile", noteMaths: 9, noteFrancais: 20 },
    { prenom: "Johanfdp(fan de pokémon)", noteMaths: 17, noteFrancais: 6 },
    { prenom: "Tom", noteMaths: 14, noteFrancais: 10 }
];

// --- SECTION 2 : AFFICHAGES SIMPLES ---

console.log("Nom de la classe :", Nom_Classe);
console.log("Nombre d'élèves :", Nombre_Eleve);
console.log("Classe ouverte :", Classe_Ouverte);
console.log("Prénom de l'élève 1 :", Eleve_1.prenom);

// --- SECTION 3 : ANALYSE GLOBALE (MOYENNE & COMPTEUR) ---

let sommeMoyennes = 0;
let nombreAdmis = 0;
let index = 0;

// Utilisation d'une boucle while pour compter les admis et cumuler les notes
while (index < eleves.length) {
    let moyenneIndiv = (eleves[index].noteMaths + eleves[index].noteFrancais) / 2;
    
    if (moyenneIndiv >= 10) {
        nombreAdmis++;
    }
    
    sommeMoyennes += moyenneIndiv;
    index++;
}

let moyenneClasse = sommeMoyennes / eleves.length;
console.log("Nombre d'élèves admis :", nombreAdmis);
console.log("Moyenne de la classe :", moyenneClasse);

// --- SECTION 4 : TRAITEMENT INDIVIDUEL (BOUCLE DE DÉTAILS) ---

console.log("--- Détails par élève ---");

for (let i = 0; i < eleves.length; i++) {
    let moy = (eleves[i].noteMaths + eleves[i].noteFrancais) / 2;
    
    // Affichage du prénom
    console.log("Élève : " + eleves[i].prenom);

    // Évaluation de la mention (Logique de la Partie 6)
    if (moy >= 16) {
        console.log("Résultat : Très Bien");
    } else if (moy >= 14) {
        console.log("Résultat : Bien");
    } else if (moy >= 12) {
        console.log("Résultat : Assez bien");
    } else if (moy >= 10) {
        console.log("Résultat : Passable / Admis");
    } else {
        console.log("Résultat : Insuffisant / Refusé");
    }
    
    console.log("Moyenne individuelle :", moy);
    console.log("-----------------------");
}