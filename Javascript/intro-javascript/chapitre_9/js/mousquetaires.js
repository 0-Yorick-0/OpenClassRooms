var mousquetaires = ["Athos", "Porthos", "Aramis"];

for (var i = 0; i < mousquetaires.length; i++) {
    console.log(mousquetaires[i]);
}

mousquetaires.push("D'Artagnan");

console.log("Maintenant ils sont quatre !");

mousquetaires.forEach(function (mousquetaire){
   console.log(mousquetaire); 
});