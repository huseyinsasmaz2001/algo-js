function clacSurface(l,L) {
    return l * L;
}

 let l = parseInt(prompt('Entre un nombre pour la largeur: '));
 let L = parseInt(prompt('Entre un nombre pour la longueur: '));

console.log("La surface du rectangle est de " + clacSurface( l ,L ));