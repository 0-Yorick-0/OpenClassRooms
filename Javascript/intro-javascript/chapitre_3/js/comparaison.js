var nombre1 = prompt("Saisissez le premier nombre");

var nombre2 = prompt("Saisissez le deuxième nombre");

if (nombre1 < nombre2){
    console.log("le premier nombre est inférieur au deuxieme");
}else if (nombre1 === nombre2){
    console.log("les deux nombres sont égaux");
}else{
    console.log("le premier nombre est supérieur au deuxième");
}