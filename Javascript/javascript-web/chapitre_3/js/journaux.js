// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
var divElt = document.getElementById("contenu");

var ulElt = document.createElement("ul");

journaux.forEach(function(journal){
  var liElt = document.createElement("li");

  var aElt = document.createElement("a");
  aElt.href = journal;
  aElt.textContent = journal;
  liElt.appendChild(aElt);
  
  ulElt.appendChild(liElt);
})

divElt.appendChild(ulElt);
