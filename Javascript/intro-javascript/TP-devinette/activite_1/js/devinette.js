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
var reponse = Number(prompt("Saisissez un nombre entre 0 et 100"));
//var essai = 1;
//while(essai <= 6 && solution !== reponse){
//essai++
for (var essai = 1 ; essai < 6 && solution !== reponse; essai++){
    if (reponse > 100 || reponse < 0){
       console.log("Vous devez saisir un nombre entre 0 et 100 " + reponse + " n'est pas valide !!!");
        var reponse = Number(prompt("Saisissez un nombre entre 0 et 100"));    
    } else if (reponse < solution){
       console.log(reponse +" est trop petit");
       var reponse = Number(prompt("Saisissez un nombre entre 0 et 100"));
    } else {
       console.log(reponse +" est trop grand");
       var reponse = Number(prompt("Saisissez un nombre entre 0 et 100"));
    } 
}
if (solution === reponse) {
    console.log("Bravo ! La solution était " + solution)
    console.log("Vous avez trouvé en " + essai + " essai(s)")
} else {
console.log("Perdu... La solution était " + solution);
}