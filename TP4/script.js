// --- 1. DÉCLARATIONS ET FONCTIONS ---
let names = ["BILAL", "JULES", "MIRADOR", "GOKU", "GOHAN", "AZERTY", "JEAN", "PIKACHU", "ARNOLD", "FRED"];
let taille_minimum = 7;
let taille_maximum = 10;
let note_maximum = 20;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

function genererEleves() {
    let students = [];
    // On crée une copie pour pouvoir retirer des noms sans modifier la liste originale
    let nomsDisponibles = [...names]; 

    for (let i = 0; i < taille; i++) {
        // On pioche un indice dans la liste des noms restants
        let indice_random = Math.floor(Math.random() * nomsDisponibles.length);
        
        // .splice retire le nom du tableau (évite les doublons comme GOKU x3)
        let nomChoisi = nomsDisponibles.splice(indice_random, 1)[0];

        let eleve = {
            firstName: nomChoisi,
            noteMath: Math.floor(Math.random() * (note_maximum + 1)),
            noteFrancais: Math.floor(Math.random() * (note_maximum + 1)),
            noteHistoire: Math.floor(Math.random() * (note_maximum + 1))
        };
        let moyenne = (eleve.noteMath + eleve.noteFrancais + eleve.noteHistoire) / 3;
        eleve.moyenne = Number(moyenne.toFixed(2));
        students.push(eleve);
    }
    return students;
}

function afficherEleves(tab) {
    for (let i = 0; i < tab.length; i++) {
        console.log(tab[i].firstName + " - " + tab[i].moyenne); 
    }
}

function trouverMoyenneMin(tab, index) {
    let min_moyenne = tab[index].moyenne;
    let indice = index;
    for (let i = index + 1; i < tab.length; i++) {
        if (tab[i].moyenne < min_moyenne) {
            min_moyenne = tab[i].moyenne;
            indice = i;
        }
    }
    return indice;
}

// --- 2. INITIALISATION ET ÉTUDE DES VALEURS ---
let students = genererEleves();
console.log(students);
console.log("Nombre d'élèves :", students.length);

let indexMin = trouverMoyenneMin(students, 0);
let min_moyenne = students[indexMin].moyenne;

console.log("L'élève ayant la plus petite moyenne", min_moyenne, 'est :', students[indexMin].firstName);
console.log("Indice de", min_moyenne, 'est :', indexMin);

let tmpInitial = students[0];
students[0] = students[indexMin];
students[indexMin] = tmpInitial;

// --- 3. SAUVEGARDE ET AFFICHAGE AVANT TRI ---
let students_stockage = [];
for (let i = 0; i < taille; i++) {
    students_stockage.push({
        firstName : students[i].firstName,
        noteMath : students[i].noteMath,
        noteFrancais : students[i].noteFrancais,
        noteHistoire : students[i].noteHistoire,
        moyenne : students[i].moyenne,
    });
}

console.log("=== Affichage du tableau avant tri avec prénom et moyenne ===");
afficherEleves(students_stockage);

// --- 4. ALGORITHME DE TRI PAR SÉLECTION COMPLET ---
let nb_exchange = 0;
let nb_verify = 0;

for (let j = 0; j < students.length - 1; j++) {
    let minIndex = j;
    for (let i = j + 1; i < students.length; i++) {
        nb_verify++;
        if (students[i].moyenne < students[minIndex].moyenne) {
            minIndex = i;
        }
    }
    if (minIndex !== j) {
        let tmp = students[j];
        students[j] = students[minIndex];
        students[minIndex] = tmp;
        nb_exchange++;
    }
}

// --- 5. RÉSULTATS FINAUX ---
console.log("=== Tri par ordre croissant ===");
afficherEleves(students);