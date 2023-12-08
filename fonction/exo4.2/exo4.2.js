// Définition de la fonction rand10() qui génère un nombre aléatoire entre 1 et 10
function rand10() {
    // Math.random() génère un nombre décimal entre 0 (inclus) et 1 (exclus)
    // Math.random() * 10 génère un nombre entre 0 (inclus) et 10 (exclus)
    // Math.floor() arrondit ce nombre à l'entier inférieur, créant une plage de 0 à 9
    // En ajoutant 1, on obtient une plage de 1 à 10
    return Math.floor(Math.random() * 10) + 1;
  }
  
  // Programme pour afficher le résultat de rand10() à chaque exécution
  // La boucle s'exécute 5 fois
  for (let i = 0; i < 5; i++) {
    // Appelle la fonction rand10() pour obtenir un nombre aléatoire entre 1 et 10
    let resultat = rand10();
    // Affiche le résultat de rand10() avec un numéro de série (de 1 à 5)
    console.log("Résultat", i + 1, ":", resultat);
  }
  