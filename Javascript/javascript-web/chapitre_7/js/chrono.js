var buttonElt = document.getElementById("button");
var compteurElt = document.getElementById("compteur");
var intervalId = null;
var demarre = false;

function compter(){
  compteurElt.textContent = Number(compteurElt.textContent) + 1;
}

buttonElt.addEventListener("click", function(){

  if (!demarre) {
    buttonElt.textContent = "Arrêter";
    intervalId = setInterval(compter, 1000);
  }else{
    buttonElt.textContent = "Démarrer";
    clearInterval(intervalId);
  }
  demarre = !demarre;
});
