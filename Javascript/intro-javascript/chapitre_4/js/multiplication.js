var nombre = Number(prompt("Saisissez un nombre"));



while (nombre < 2 || nombre > 9)
    {
        var nombre = Number(prompt("Saisissez un nombre entre 2 et 9"));
    }
console.log("Voici la table de multiplication de " + nombre);
for (var i = 1; i <= 10; i++)
        {
            console.log(nombre + " x " + i + " = " + i*nombre);
        }

