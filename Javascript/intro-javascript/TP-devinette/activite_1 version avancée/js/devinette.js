/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var number = 0;
var success = false;
 
while (!success && number++ < 6) {
 var proposition = parseInt(prompt("entrer votre proposition"));
 success = proposition === solution;
 if (!success) { 
     console.log(proposition + " est trop " + ((proposition < solution) ? "petit" : "grand"));
 }
}
 
if (success) {
    console.log("Bravo ! La solution etait " + solution + " vous avez trouve en " + number + " essai(s)");
}
else {
    console.log("perdu...La solution etait " + solution);
}