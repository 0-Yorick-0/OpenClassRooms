ajaxGet("http://localhost:8888/OpenClassrooms/Javascript/javascript-web/javascript-web-srv/data/tableaux.json", function(reponse){
  var tableaux = JSON.parse(reponse);

  var tableElt = document.getElementById("tableaux");
//on boucle l'ajout d'élément au tableau
  tableaux.forEach(function(tableau){
    var trElt = document.createElement("tr");
      var tdElt = document.createElement("td");
      tdElt.textContent = tableau.Nom;
      trElt.appendChild(tdElt);
      var tdElt = document.createElement("td");
      tdElt.textContent = tableau.Annee;
      trElt.appendChild(tdElt);
      var tdElt = document.createElement("td");
      tdElt.textContent = tableau.Auteur;
      trElt.appendChild(tdElt);

    tableElt.appendChild(trElt);
  });

});
