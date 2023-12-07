
let min = (prompt("Entrez le nombre minimum :"));
let max = (prompt("Entrez le nombre maximum :"));
let current =(prompt("Entrez un nombre actuel :"));


if (min > max) {
  console.log("Désolé, mais le nombre minimum ne peut pas être supérieur au nombre maximum. Vous ne semblez pas comprendre.");
} else {
  
  if (current >= min && current <= max) {
    console.log(`Le nombre actuel ${current} est compris entre ${min} et ${max}.`);
  } else {
    console.log(`Le nombre actuel ${current} n'est pas compris entre ${min} et ${max}.`);
  }
}