var buttonDemarrer = document.getElementById("demarrer");
var buttonArreter = document.getElementById("arreter");
var cadre = document.getElementById("cadre");
var ballon = document.getElementById("ballon");
var vitesse = 10;

var animationId = null;

function deplacer(){
  //conversion de la position "left" du ballon en entier
  var xBallon = parseFloat(getComputedStyle(ballon).left);
  //calcul de la largeur du ballon
  var xWidthBallon = parseFloat(getComputedStyle(ballon).width)
  //calcul de la largeur du cadre
  var xMax = parseFloat(getComputedStyle(cadre).width);
  if (xBallon + xWidthBallon <= xMax && xBallon >= 0) {
    //déplacement du ballon à droite
    ballon.style.left = vitesse + xBallon + "px";
  }else{
    vitesse *= -1;
    //déplacement du ballon à gauche (grâce à la vitesse négative)
    ballon.style.left = vitesse + xBallon + "px";
  }
  //demande au navigateur d'appeler la fn dès que possible
  animationId = requestAnimationFrame(deplacer);
}



buttonDemarrer.addEventListener("click", function(){
  requestAnimationFrame(deplacer);
  buttonArreter.removeAttribute("disabled");
  buttonDemarrer.disabled = "true";
});

buttonArreter.addEventListener("click", function(){
  cancelAnimationFrame(animationId);
  buttonDemarrer.removeAttribute("disabled");
  buttonArreter.disabled = "true";
});
