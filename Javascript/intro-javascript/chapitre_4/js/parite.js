var nombreDepart = Number(prompt("Saisissez le nombre de départ"));

for (var i = nombreDepart; i < nombreDepart + 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " est pair");
    }else{
        console.log(i + " est impair");
    }
}