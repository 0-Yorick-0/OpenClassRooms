var chien = {
    nom: "Lucius",
    race: "dalmatien",
    capacite_intellectuelle: "crétin",
    
    aboyer: function() {
    var aboyer = "Wouf !";
    return aboyer;
    }
};

console.log(chien.nom + " est un " + chien.race + " dont le niveau intellectuel est : " + chien.capacite_intellectuelle);

console.log("Son vocabulaire est très riche, il sait dire " + chien.aboyer());