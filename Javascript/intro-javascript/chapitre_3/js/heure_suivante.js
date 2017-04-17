var heure = Number(prompt("Saisissez l'heure"));

var minutes = Number(prompt("Saisissez les minutes"));

var secondes = Number(prompt("Saisissez les secondes"));

if (secondes === 59 && minutes === 59 && heure === 23) {
    secondes = 0;
    minutes = 0;
    heure = 0;
    console.log(heure + "h" + minutes + "m" + secondes + "s");
} else if (secondes === 59 && minutes === 59 && heure < 23) {
    secondes = 0;
    minutes = 0;
    heure++;
    console.log(heure + "h" + minutes + "m" + secondes + "s");
} else if (secondes === 59 && minutes < 59) {
    secondes = 0;
    minutes++;
    console.log(heure + "h" + minutes + "m" + secondes + "s");
} else if (secondes < 59  && minutes <59 && heure < 23) {
    secondes++;
    console.log(heure + "h" + minutes + "m" + secondes + "s");
    
} else {
    console.log("Les données entrées sont erronées");
}