var jour = prompt("Veuillez saisir un jour");

switch (jour){
    case "lundi":
        console.log("Le jour suivant est mardi");
        break;
    case "mardi":
        console.log("Le jour suivant est mercredi");
        break;
     case "mercredi":
        console.log("Le jour suivant est jeudi");
        break;
     case "jeudi":
        console.log("Le jour suivant est vendredi");
        break;
    case "vendredi":
        console.log("Le jour suivant est samedi");
        break;
    case "samedi":
        console.log("Le jour suivant est dimanche");
        break;
    case "dimanche":
        console.log("Le jour suivant est lundi");
        break;
    default:
        console.log("Je n'ai pas bien saisi....");
}
