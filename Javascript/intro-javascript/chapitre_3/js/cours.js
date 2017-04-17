/*var nombre = Number(prompt("Saisissez un nombre"));
if ((nombre > 0) && (nombre < 100)) {
    console.log(nombre + " est positif et compris entre 0 et 100");
} else if (nombre === 0) {
    console.log(nombre + " est nul.");
} else {
    console.log(nombre + " est négatif");
}*/

var meteo = prompt("Quel temps fait-il?");
switch(meteo) {
    case "soleil":
        console.log("Sortez à poil");
    break;
    case "vent":
        console.log("mettez un bonnet");
    break;
    case "pluie":
        console.log("enfilez-vous un parapluie");
    break;
    default:
        console.log("Je n'ai pas bien saisi...")
    
}
