function direBonjour() {
    var message = "Bonjour " + prenom + "!";
    return message;
}

var prenom = "Yorick";
console.log("Début du programme");
var resultat = direBonjour("Yorick");
console.log(resultat);
console.log("Fin du programme");