function calculer(nombre1, nombre2, operation){
    if (operation === "addition")
        {
            var resultat = (nombre1 + nombre2);
            return resultat;
        }
    else if (operation === "soustraction")
        {
            var resultat = (nombre1 - nombre2);
            return resultat;
        }
    else if (operation === "multiplication")
        {
            var resultat = (nombre1 * nombre2);
            return resultat;
        }
    else if (operation === "division")
        {
            var resultat = (nombre1 / nombre2);
            return resultat;
        }
}

var nombre1 = Number(prompt("nombre1"));
var nombre2 = Number(prompt("nombre2"));
var operation = prompt("operation");

console.log(calculer(nombre1, nombre2, operation));