var stylo = {
    type : "bille",
    couleur : "bleu",
    marque : "Bic"
};

console.log(stylo.type);
console.log(stylo.couleur);
console.log(stylo.marque);

console.log(stylo['type']);
console.log(stylo['couleur']);
console.log(stylo['marque']);


console.log("Mon stylo à " + stylo.type + " " + stylo.couleur + " est un " + stylo.marque);

stylo.couleur = "rouge";

console.log("Mon stylo écrit maintenant en " + stylo.couleur);

stylo.prix = 2.5;

console.log("Mon stylo coûte " + stylo.prix + " euros");

var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    
    decrire: function() {
        var description = this.nom + " a " + this.sante + " points de vie et " + this.force + " points de force";
        return description;
    }
};

console.log(perso.decrire());

perso.sante = perso.sante - 20;

console.log("Aurora se prend une flèche dans le cul ! Elle a maintenant " + perso.sante + " pdv");

perso.force= perso.force + 10,
    
console.log(perso.decrire());