var listeMot = [];

var mot = prompt("Saisissez un mot ou ecrivez stop");

mot = mot.toLowerCase();

while (mot !== "stop"){

listeMot.push(mot);

var mot = prompt("Saisissez un mot ou ecrivez stop");
    
mot = mot.toLowerCase();
  
}

console.log("Voici la liste des mots saisis");

listeMot.forEach(function(mot){
   console.log(mot); 
});