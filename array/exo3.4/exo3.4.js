let tab = [1, 10, 20, 30, 40, 50]; // Tableau donné 

let min = tab[0]; // Initialise la variable min avec le premier élément du tableau
let max = tab[0]; // Initialise la variable max avec le premier élément du tableau
let i = 0

// Parcourt le tableau pour trouver le minimum et le maximum
for (i = 1 ; i < tab.length; i++) {
  if (tab[i] < min) {
    min = tab[i]; // Met à jour le minimum si un élément inférieur est trouvé
  }
  if (tab[i] > max) {
    max = tab[i]; // Met à jour le maximum si un élément supérieur est trouvé
  }
}

// Affiche le minimum et le maximum dans la console
console.log("Le minimum du tableau est : " + min);
console.log("Le maximum du tableau est : " + max);


// meme script grace a la boucle while 

// Parcourt le tableau pour trouver le minimum et le maximum en utilisant une boucle while
while (i < tab.length) {
  if (tab[i] < min) {
    min = tab[i]; // Met à jour le minimum si un élément inférieur est trouvé
  }
  if (tab[i] > max) {
    max = tab[i]; // Met à jour le maximum si un élément supérieur est trouvé
  }
  i++; // Incrémente l'indice pour passer à l'élément suivant du tableau
}

// Affiche le minimum et le maximum dans la console
console.log("Le minimum du tableau est : " + min);
console.log("Le maximum du tableau est : " + max);

