let numeroPrefere;

while (true) { // Démarre une boucle while qui s'exécute tant que la condition est vraie (ici, true pour créer une boucle infinie)
  numeroPrefere = parseInt(prompt("Quel est votre numéro préféré ?")); // Demande à l'utilisateur de saisir un numéro et le stocke dans la variable numeroPrefere après l'avoir converti en entier avec parseInt()

  if (numeroPrefere !== 42) { // Vérifie si le numéro préféré saisi par l'utilisateur est différent de 42
    console.log("Êtes-vous sûr ?"); // Affiche un message si le numéro saisi n'est pas égal à 42
  } else { // Si le numéro préféré est 42
    console.log('C\'est correct !'); // Affiche ce message si le numéro préféré est bien 42
    break; // Sort de la boucle while car la condition n'est plus vraie
  }
}
