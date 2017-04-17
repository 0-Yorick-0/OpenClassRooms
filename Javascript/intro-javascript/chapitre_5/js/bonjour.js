function direBonjour(nom, prenom){
    var message = "Bonjour " + prenom + " " + nom;
    return message;
}

var nom = prompt("Saisissez votre nom");
var prenom = prompt("Saisissez votre prénom");

console.log(direBonjour(nom, prenom));