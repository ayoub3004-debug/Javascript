//////////////////////// Code fourni (ne pas modifier) ////////////////////////
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;
let notes = [];
let note_maximum = 20;

for (let i = 0; i < taille; i++) {
    let note = Math.floor(Math.random() * (note_maximum + 1));
    notes.push(note);
}
///////////////////////////////////////////////////////////////////////////////

// --- SECTION 1 : SAUVEGARDE ET INITIALISATION ---

// On clone le tableau original pour garder une trace avant le tri
let stockages_notes = [];
for (let i = 0; i < notes.length; i++) {
    stockages_notes.push(notes[i]);
}

// Initialisation des variables de recherche
let min = notes[0];
let max = notes[0];
let IndiceMinGlobal = 0;

// --- SECTION 2 : ANALYSE STATISTIQUE (MIN / MAX / INDICE) ---

for (let i = 0; i < notes.length; i++) {
    // Recherche de la valeur minimale et maximale
    if (notes[i] < min) {
        min = notes[i];
    } 
    if (notes[i] > max) { // Correction de la logique max
        max = notes[i];
    }
    
    // Recherche de l'indice de la plus petite valeur
    if (notes[i] < notes[IndiceMinGlobal]) {
        IndiceMinGlobal = i;
    }
}

// Affichages des statistiques
console.log("Taille du tableau :", notes.length);
console.log("Le tableau original : ", stockages_notes);
console.log("Note la plus basse :", min);
console.log("Note la plus haute :", max);
console.log("Indice de la plus petite valeur :", IndiceMinGlobal);

// --- SECTION 3 : ÉCHANGE INITIAL (Démonstration) ---

// On place la plus petite valeur tout au début (Indice 0)
let tempEchange = notes[0];
notes[0] = notes[IndiceMinGlobal];
notes[IndiceMinGlobal] = tempEchange;

console.log("Tableau après le premier échange (min à l'indice 0) :", notes);

// --- SECTION 4 : ALGORITHME DE TRI COMPLET (Tri par insertion/sélection) ---

for (let i = 0; i < notes.length - 1; i++) {
    let indiceDuPlusPetit = i;

    // Recherche du plus petit élément dans le reste du tableau
    for (let j = i + 1; j < notes.length; j++) {
        if (notes[j] < notes[indiceDuPlusPetit]) {
            indiceDuPlusPetit = j;
        }
    }

    // Échange de position
    let tempTri = notes[i];
    notes[i] = notes[indiceDuPlusPetit];
    notes[indiceDuPlusPetit] = tempTri;
}

// --- SECTION 5 : RÉSULTATS FINAUX ---

console.log("--- BILAN FINAL ---");
console.log("Tableau avant tri :", stockages_notes);
console.log("Tableau après tri :", notes);