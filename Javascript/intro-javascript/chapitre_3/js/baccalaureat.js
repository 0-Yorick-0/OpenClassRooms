var moyenne = prompt("Saisissez votre moyenne");

if (moyenne < 10){
           console.log("vous êtes recalé");
}else if (moyenne >= 10 && moyenne < 12){
        console.log("Vous êtes reçu");
}else if (moyenne >= 12){
        console.log("Vous êtes reçu avec mention");
}else{
      console.log("Je n'ai pas bien saisi");
}