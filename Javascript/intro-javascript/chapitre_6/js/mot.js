function compterNbVoyelles(mot){
    var mot = mot.toLocaleLowerCase();
    var NbVoyelles = 0;
    for (var i = 0; i < mot.length; i++)
        {
            var lettre = mot[i];
            if (lettre === "a" || lettre === "e" || lettre === "i" || lettre === "o" || lettre === "u" || lettre === "y")
                {
                    NbVoyelles++;
                }
        }
    return NbVoyelles;
}

function inverser(mot){
    var motInverse ="";
    for (var i = 0; i < mot.length; i++)
        {
            var lettre = mot[i];
            motInverse = lettre + motInverse;
        }
    return motInverse;
}

function trouverLettreLeet(lettre){
    var lettre = lettre.toLowerCase();
    switch (lettre){
        case "a":
            return 4;
        break;
        case "b":
            return 8;
        break;
        case "e":
            return 3;
        break;
        case "l":
            return 1;
        break;
        case "o":
            return 0;
        break;
        case "s":
            return 5;
        break;
        default:
            return lettre;
    }
}

function convertirEnLeetSpeak(mot){
    var motLeet = "";
    for (var i = 0; i < mot.length; i++)
        {
            motLeet = motLeet + trouverLettreLeet(mot[i]);
        }
    return motLeet;
    
}
var mot = prompt("Saisissez un mot");

var longueur = mot.length;

console.log("Le mot " + mot + " contient " + longueur + " caractère(s)");

console.log("Il s'écrit en minuscules " + mot.toLowerCase());

console.log("Il s'écrit en majuscules " + mot.toUpperCase());

var consonnes = longueur - compterNbVoyelles(mot);


console.log("Il contient " + compterNbVoyelles(mot) + " voyelles et " + consonnes + " consonne(s)");

var envers = inverser(mot);

console.log("Il s'écrit à l'envers " + inverser(mot));

if (mot.toLowerCase() === inverser(mot).toLowerCase())
    {
        console.log("C'est un palindrome");
    }
else
    {
        console.log("Ce n'est pas un palindrome");
    }

console.log("Sa version Leet est " + convertirEnLeetSpeak(mot));