var alphabet = ["A", "B", "C", "D"];

var divElt = document.createElement("div");
document.body.appendChild(divElt);

var divContenu = document.createElement("div");
document.body.appendChild(divContenu);

for (var i = 0; i < alphabet.length; i++) {
  var lettre = document.createElement("a");
  lettre.textContent = alphabet[i];
  lettre.href="#";

  lettre.addEventListener("click", function(e){
    divContenu.innerHTML = "";
    ajaxGet("https://oc-jswebsrv.herokuapp.com/api/lexique/" + e.target.textContent, function(reponse){
      var definitions = JSON.parse(reponse);
      definitions.forEach(function(definition){
        var titreElt = document.createElement("h2");
        titreElt.textContent = definition.term;
        divContenu.appendChild(titreElt);

        var defElt = document.createElement("p");
        defElt.textContent = definition.definition;
        divContenu.appendChild(defElt);
      });
    });
  });

  divElt.appendChild(lettre);
  divElt.appendChild(document.createTextNode(" | "));
}
