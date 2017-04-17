var Chien = {
    initChien: function(name, race, taille) {
        this.name = name;
        this.race = race;
        this.taille = taille;
    },
    aboyer: function() {
        var aboyer = "Wouf!";
        return aboyer;
    }
};

var Crockdur = Object.create(Chien);
Crockdur.initChien("Crockdur", "mâtin de Naples", 75);
console.log(Crockdur.name + " est un " + Crockdur.race + " mesurant " + Crockdur.taille + " cms");
console.log(Crockdur.aboyer());