var nombre = Number(prompt("Saisissez un nombre"));

while (nombre > 100 || nombre < 50)
{
    var nombre = Number(prompt("Saisissez un nombre inférieur ou égal à 100 et supérieur à 50"));
}
console.log("bravo");