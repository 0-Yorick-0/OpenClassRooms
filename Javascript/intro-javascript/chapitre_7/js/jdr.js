var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp : 0,
    
    decrire: function() {
        var description = this.nom + " a " + this.sante + " points de vie et " + this.force + " points de force. Son xp est à " + this.xp + ".";
        return description;
    }
};

var perso2 = {
    nom: "Glacius",
    sante: 130,
    force: 30,
    xp: 0,
    
    decrire: function(){
        var descritpion = this.nom + " a " + this.sante + " points de vie et " + this.force + " points de force. Son xp est à " + this.xp + ".";
        return descritpion;
}
}
console.log(perso.decrire());

perso.sante = perso.sante - 20;

console.log("Aurora se prend une flèche dans le cul ! Elle a maintenant " + perso.sante + " pdv");

perso.force= perso.force + 10;
    
perso.xp = perso.xp + 15;
    
console.log(perso.decrire());