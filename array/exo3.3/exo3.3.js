let tab1 = [1 , 2 , 3 , 4 , 5];
let tab2 = [];
let i = 0;

tab2.length = tab1.length;

while (i < tab1.length){
    tab2[i] = tab1[i];
    i++;
}

console.log(tab2);


while (i < tab1.length){
    tab2.push(tab1[i]);
    i++;
}
console.log(tab2);