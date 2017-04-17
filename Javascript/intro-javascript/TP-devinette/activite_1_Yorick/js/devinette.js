/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var i = 0; // i comptera le nombre d'essai
var max_i = 6; // le nombre d'essai maximum est fixé à 6
var nombre = 0;



while ((nombre !== solution) && (i < max_i)) // tant qu'on a pas la solution ou bien que le nombre d'essai max n'est pas atteint
{
        nombre = Number(prompt("Saisissez un nombre entre 1 et 100"));
        i++;
        if (nombre < 1 || nombre > 100) // au cas où le nombre saisi soit invalide
            {
                console.log("Merci de saisir un nombre entre 1 et 100. Vous venez de griller un essai^^.")
            }
        else if (nombre < solution)
            {
                console.log(nombre + " est trop petit");
            }
        else if (nombre > solution)
            {
                console.log(nombre + " est trop grand");
            }
}

// affichage des résultats : soit on a trouvé la solution, soit on a atteint le nombre d'essai max sans solution

if (nombre === solution)
    {
        console.log("Bravo ! la solution était " + solution);
        console.log("Vous avez trouvé en " + i + " essai(s)");
    }
else
    {
        console.log("Perdu... La solution était " + solution);
    }


        