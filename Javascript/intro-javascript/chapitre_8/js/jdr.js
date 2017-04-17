var Personnage = {
    init: function(nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0;
    },
    
    decrire: function() {
        var description = this.nom + " a " + this.sante + " points de vie et " + this.force + " points de force. Son xp est à " + this.xp + ".";
        return description;
    }
};

var perso1 = Object.create(Personnage);
perso1.init("Aurora", 150, 25);

var perso2 = Object.create(Personnage);
perso2.init("Glacius", 130, 30);

console.log(perso1.decrire());
console.log(perso2.decrire());