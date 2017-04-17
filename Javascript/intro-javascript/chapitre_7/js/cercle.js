var r = Number(prompt("Entrez le rayon du cercle"));

var cercle = {
    perimetre: r*2*Math.PI,
    aire: Math.PI*r*r
};

console.log("Perimetre : " + cercle.perimetre);
console.log("Aire : " + cercle.aire);