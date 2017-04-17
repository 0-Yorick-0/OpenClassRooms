var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    },
    
    decrire: function () {
        return description = this.nom + " est un " + this.race + " mesurant " + this.taille + ". Il aboie : " + this.aboyer();
        }
};

var chien1 = Object.create(Chien);
chien1.init("Crockdur", "mâtin de Naples", 75);


var chien2 = Object.create(Chien);
chien2.init("Pupuce", "bichon", 22);


var chien3 = Object.create(Chien);
chien3.init("Médor", "labrador", 58);


var listeChiens = [chien1, chien2, chien3];

console.log("Le chenil héberge " + listeChiens.length + " chien(s) :");
listeChiens.forEach(function(chien){
   console.log(chien.decrire(chien)); 
});

var emp1 = {
    nom: "Ochon",
    prenom: "Paul"
};
var emp2 = {
    nom: "Diossy",
    prenom: "Daisy"
};
var employes = [emp1, emp2];
console.log(employes[1].prenom());
