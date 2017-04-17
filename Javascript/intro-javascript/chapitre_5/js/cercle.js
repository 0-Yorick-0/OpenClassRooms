function perimetre(rayon){
    var resultat = 2 * (Math.PI) * rayon;
    return resultat;
}

function aire(rayon){
    var resultat = (Math.PI) * rayon * rayon;
    return resultat;
}

var rayon = Number(prompt("Saisissez le rayon en cms"));

console.log("Le perimetre du cercle vaut " + perimetre(rayon) + " cms");

console.log("L'aire du cercle vaut " + aire(rayon) + " cms");