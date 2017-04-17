//création du prototype initial
var Personnage = {
    initPerso: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    }
};

//création de l'objet Joueur, et ajout de sa propre fn d'initialisation et de description
var Joueur = Object.create(Personnage);
Joueur.initJoueur = function (nom, sante, force) {
    this.initPerso(nom, sante, force);
    this.xp = 0;
};

Joueur.decrire = function() {
    var description = this.nom + " a " + this.sante + " points de vie et " + this.force + " points de force. Son expérience est à " + this.xp + ".";
    return description;
};
 //création de l'objet Adversaire, ayant une fn d'initialisation légérement différente de Joueur
var Adversaire = Object.create(Personnage);
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};

//création des personnages, Joueurs et Adversaires

var perso1 = Object.create(Joueur);
perso1.initJoueur("Aurora", 150, 25);

var perso2 = Object.create(Joueur);
perso2.initJoueur("Glacius", 130, 30);

console.log(perso1.decrire());
console.log(perso2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("Zog", 40, 20, "orc", 10);

console.log("Un affreux monstre se pointe, c'est un " + monstre.race + " nommé " + monstre.nom);