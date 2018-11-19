function maxEtMin(liste){
    liste = liste.split(" ");
    return Math.max.apply(null, liste) + " " + Math.min.apply(null, liste);
}


console.log(maxEtMin("1 2 3 4 5")); 
console.log(maxEtMin("1 2 -3 4 5")); 
console.log(maxEtMin("1 9 3 4 -5"));
