function minimum(valeur1, valeur2){
    if (valeur1 < valeur2)
        {
            return valeur1;
        }
    else
        {
            return valeur2;
        }
}

var valeur1 = prompt("Valeur 1");

var valeur2 = prompt("Valeur 2");

console.log(minimum(valeur1, valeur2));