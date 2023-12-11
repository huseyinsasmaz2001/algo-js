// Fonction rand10() pour générer un nombre aléatoire entre 1 et 10
function rand10() {
    return Math.floor(Math.random() * 10) + 1; // Génère un nombre aléatoire entre 1 et 10
}

function multiRand(n) { // Définition de la fonction multiRand prenant en paramètre 'n'
    const result = []; // Création d'un tableau vide pour stocker les nombres générés
    for (let i = 0; i < n; i++) { // Boucle pour générer 'n' nombres aléatoires
        result.push(rand10()); // Appelle rand10() et ajoute le nombre généré au tableau
    }
    return result; // Retourne le tableau contenant les nombres aléatoires
}

// Demande à l'utilisateur le nombre de nombres aléatoires à générer
const num = prompt("Combien de nombres aléatoires souhaitez-vous générer ?"); // Demande à l'utilisateur via une fenêtre prompt
const count = parseInt(num); // Convertit la réponse de l'utilisateur en un entier

if (Number.isInteger(count) && count > 0) { // Vérifie si 'count' est un entier positif
    const randomNumbers = multiRand(count); // Appelle multiRand() pour générer les nombres
    console.log(`Voici ${count} nombres aléatoires entre 1 et 10 :`);
    console.log(randomNumbers.join(', ')); // Affiche les nombres aléatoires séparés par des virgules
} else {
    console.log('Veuillez saisir un nombre entier valide supérieur à zéro.'); // Message d'erreur si l'entrée n'est pas valide
}

  