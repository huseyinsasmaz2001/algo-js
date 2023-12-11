
function factorial(a) {
    if (a === 0 || a === 1) {
        return 1;
    } else {
        return a * factorial(a - 1);
    }
}

// Demande à l'utilisateur de saisir le nombre pour calculer sa factorielle
const number = parseInt(prompt("Entrez un nombre pour calculer sa factorielle :"));

// Vérifie si la saisie de l'utilisateur est un nombre
if (!isNaN(number)) {
    // Si la saisie est un nombre, exécute ce bloc de code
    const result = factorial(number); // Appel de la fonction factorial avec le nombre saisi par l'utilisateur
    console.log(`Factorielle de ${number} est ${result}`);
} else {
    // Si la saisie n'est pas un nombre, exécute ce bloc de code
    console.log("Veuillez saisir un nombre valide."); // Message d'erreur si la saisie n'est pas un nombre
}

