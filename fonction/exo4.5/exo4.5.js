
function calcDistance(pointA, pointB) {
    // Extrayez les coordonnées x et y des points A et B
    const [x1, y1] = pointA;
    const [x2, y2] = pointB;
    
    // Calcul de la distance euclidienne entre les points A et B (distance euclidienne)
const distance = Math.sqrt(  // Prend la racine carrée de la somme des carrés des différences des coordonnées
Math.pow(x2 - x1, 2) +   // Carré de la différence entre les coordonnées x des points A et B
Math.pow(y2 - y1, 2) );   // Carré de la différence entre les coordonnées y des points A et B

  return distance.toFixed(2); // Arrondit la distance à deux décimales
}

// Exemples d'utilisation de la fonction calcDistance
const distance1 = calcDistance([1, 1], [2, 2]); // Point A = [1, 1], Point B = [2, 2]
console.log(`Point A = [1, 1], Point B = [2, 2] => ${distance1}`);

const distance2 = calcDistance([1, 1], [3, 1]); // Point A = [1, 1], Point B = [3, 1]
console.log(`Point A = [1, 1], Point B = [3, 1] => ${distance2}`);

const distance3 = calcDistance([4, 1], [1, 1]); // Point A = [4, 1], Point B = [1, 1]
console.log(`Point A = [4, 1], Point B = [1, 1] => ${distance3}`);

const distance4 = calcDistance([-2, 2], [2, -2]); // Point A = [-2, 2], Point B = [2, -2]
console.log(`Point A = [-2, 2], Point B = [2, -2] => ${distance4}`);
