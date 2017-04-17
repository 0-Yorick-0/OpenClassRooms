var Personnage = { // on définit d'abord un prototype pour initaliser les perso/adversaires et définir les caractéristiques communes de combat
    initPerso: function (nom, sante, force) {
        this.nom = nom,
        this.sante = sante;
        this.force = force;
        this.po = 10;
        this.cle = 1;
    },
    
    //chaque perso aura la capacité d'attaquer définie comme suit :
    attaquer: function (cible) {
        if (this.sante > 0) {
            var degats = this.force;
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
            cible.sante = cible.sante - degats;
                if (cible.sante > 0) {
                    console.log(cible.nom + " a encore " + cible.sante + " points de vie");
                }else{
                    cible.sante = 0;
                    console.log(cible.nom + " est mort !");
                }
        }else{
            console.log(this.nom + " ne peut pas attaquer, il est mort...");
        }
    }
};


//création de l'objet Joueur avec Personnage comme prototype :
var Joueur = Object.create(Personnage);
Joueur.initJoueur = function(nom, sante, force) {
    this.initPerso(nom, sante, force);
    this.xp = 0;
};

Joueur.decrire = function() {
    var descritpion = this.nom + " a " + this.sante + " points de vie, " + this.force + " points de force, " + this.po + " pièces d'or, " + this.cle + " clé(s). Son expérience est à " + this.xp;
    return descritpion;
};


//on ajoute une méthode "combattre" au Joueur, qui reprend la méthode "combat" de l'objet Personnage, et ajoute une option de gain d'expérience
Joueur.combattre = function(adversaire) {
    this.attaquer(adversaire);
    if (adversaire.sante === 0) {
        console.log(this.nom + " a tué " + adversaire.nom + " et gagne " + adversaire.valeur + "points d'xp, " + adversaire.po + " pièces d'or et " + this.cle + " clé.");
        this.xp += adversaire.valeur;
        this.po += adversaire.po;
        this.cle += adversaire.cle;
    }
};

//création de l'objet adversaire
var Adversaire = Object.create(Personnage);
Adversaire.initAdversaire = function(nom, sante, force, race, valeur) {
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};


var perso1 = Object.create(Joueur);
perso1.initJoueur("Aurora", 150, 25);

var perso2 = Object.create(Joueur);
perso2.initJoueur("Glacius", 130, 30);

console.log(perso1.decrire());
console.log(perso2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("Zog", 40, 20, "orc", 10);

monstre.attaquer(perso1);
monstre.attaquer(perso2);

perso1.combattre(monstre);
perso2.combattre(monstre);

console.log(perso1.decrire());
console.log(perso2.decrire());
