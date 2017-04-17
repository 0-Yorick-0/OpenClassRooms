var valeurs = [11, 3, 7, 2, 9, 10];

var comparateur = 0;

for (var i = 0; i < valeurs.length; i++) {
    var nombre1 = valeurs[i];
    if (nombre1 > comparateur){
        var comparateur = nombre1;
    }
}

console.log(comparateur);