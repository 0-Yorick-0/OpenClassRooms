var divElt = document.getElementById("contenu");

var ulElt = document.createElement("ul");
ulElt.textContent = "Informations sur l'élément";
document.body.insertBefore(ulElt, divElt);

var liElt = document.createElement("li");
liElt.textContent = "Hauteur : " + getComputedStyle(divElt).height;
ulElt.appendChild(liElt);

var liElt = document.createElement("li");
liElt.textContent = "Largeur : " + getComputedStyle(divElt).width;
ulElt.appendChild(liElt);
