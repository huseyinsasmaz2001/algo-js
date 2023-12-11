// Définition de la fonction pour saisir les détails de la série télévisée
function askTvSerie() {
    let serie = {}; // Création d'un objet série vide

    // Demande à l'utilisateur de saisir le nom de sa série préférée et l'année de production
    serie.nom = prompt("Entrez le nom de votre série télévisée préférée :");
    serie.anneeProduction = prompt("Entrez l'année de production de la série :");

    serie.acteurs = []; // Initialise un tableau pour stocker les noms des acteurs

    // Demande à l'utilisateur les noms des acteurs (il peut en saisir autant qu'il veut)
    while (true) {
        let nomActeur = prompt("Entrez le nom d'un acteur de la série (ou tapez 'fin' pour arrêter) :");
        if (nomActeur.toLowerCase() === 'fin') {
            break; // Sort de la boucle si l'utilisateur entre 'fin'
        }
        serie.acteurs.push(nomActeur); // Ajoute le nom de l'acteur au tableau des acteurs
    }

    return serie; // Renvoie l'objet série avec toutes les données saisies
}

// Fonction pour randomiser les noms des acteurs
function randomizeCast(tvSerie) {
    // Utilisation de l'algorithme de Fisher-Yates pour mélanger aléatoirement les noms des acteurs
    for (let i = tvSerie.acteurs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tvSerie.acteurs[i], tvSerie.acteurs[j]] = [tvSerie.acteurs[j], tvSerie.acteurs[i]];
    }
    return tvSerie.acteurs; // Renvoie la liste aléatoire des noms des acteurs
}

// Appel de la fonction pour obtenir les détails de la série de l'utilisateur
const serieTelevisee = askTvSerie();

// Affichage des détails de la série
console.log("Nom de la série : " + serieTelevisee.nom); // Affiche le nom de la série
console.log("Année de production : " + serieTelevisee.anneeProduction); // Affiche l'année de production

// Appel de la fonction pour randomiser les noms des acteurs de la série
const castingAleatoire = randomizeCast(serieTelevisee);

// Affichage de la liste aléatoire des noms des acteurs
console.log("Nouveau casting aléatoire :");
for (let i = 0; i < castingAleatoire.length; i++) {
    console.log("- " + castingAleatoire[i]); // Affiche chaque nom d'acteur du nouveau casting
}
