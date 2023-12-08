// Création d'un tableau appelé 'tableau1' contenant des nombres
let tableau1 = [1, 2, 3, 4, 5]; 

// Création d'un autre tableau appelé 'tableau2' avec d'autres nombres
let tableau2 = [100, 101, 102];

// Initialisation de la variable 'somme' à 0 pour stocker la somme des éléments du premier tableau
let somme = 0;

// Initialisation de la variable 'somme2' à 0 pour stocker la somme des éléments du deuxième tableau
let somme2 = 0;

// Boucle parcourant chaque élément du premier tableau et ajoutant ses valeurs à la variable 'somme'
for (let i = 0; i < tableau1.length; i++) {
  somme += tableau1[i];
}

// Calcul de la moyenne en divisant la somme par le nombre d'éléments dans le premier tableau
somme /= tableau1.length;

// Affichage dans la console de la moyenne de tous les éléments du premier tableau
console.log("La moyenne de tous les éléments du tableau 1 est : " + somme);

// Boucle parcourant chaque élément du deuxième tableau et ajoutant ses valeurs à la variable 'somme2'
for (let i = 0; i < tableau2.length; i++) {
    somme2 += tableau2[i];
}

// Calcul de la moyenne en divisant la somme par le nombre d'éléments dans le deuxième tableau
somme2 /= tableau2.length;

// Affichage dans la console de la moyenne de tous les éléments du deuxième tableau
console.log("La moyenne de tous les éléments du tableau 2 est : " + somme2);
