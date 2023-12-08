// Demande à l'utilisateur de saisir un nombre et le convertit en entier avec parseInt
let n = parseInt(prompt("Saisi un nombre"));

// Initialise une variable 'i' à 1 pour être utilisée comme compteur de la boucle while
let i = 1;

// Initialise une variable 'j' à 0 pour stocker la somme des nombres saisis par l'utilisateur
let j = 0;

// Utilise une boucle while pour saisir 'n' nouveaux nombres
while (i <= n) {
    // Demande à l'utilisateur de saisir un nouveau nombre et le stocke dans 'newNum'
    let newNum =  parseInt (window.prompt("Saisi un nouveau nombre "));

    // Ajoute le nombre saisi ('newNum'), converti en nombre avec Number(), à la somme 'j'
    j += newNum;

    // Incrémente 'i' pour contrôler la condition de la boucle 'while'
    i++;
}

// Affiche la somme totale 'j' dans la console
console.log(j);

// Affiche une boîte de dialogue (alert) montrant la somme des nombres saisis à l'utilisateur
alert("La somme est " + j);