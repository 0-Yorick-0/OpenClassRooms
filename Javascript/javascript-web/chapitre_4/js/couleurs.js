var fontColor = prompt("Quelle couleur pour le texte ?");
var backgroundColor = prompt("Quelle couleur pour le fond ?");

var divElts = document.getElementsByTagName("div");
for (var i = 0; i < divElts.length;  i++) {
  divElts[i].style.color = fontColor;
  divElts[i].style.backgroundColor = backgroundColor;
}
