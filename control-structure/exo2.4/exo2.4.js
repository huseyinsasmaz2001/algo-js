for (let i = 1; i <= 100; i++) { // Compte de 1 à 100
    if (i % 2 === 0) { // Si i est pair
      console.log(`${i} / 2 = ${i / 2}`); // Affiche le résultat de la division par 2 pour les nombres pairs
    } else { // Sinon (i est impair)
      console.log(`${i} * 3 = ${i * 3}`); // Affiche le résultat de la multiplication par 3 pour les nombres impairs
    }
}