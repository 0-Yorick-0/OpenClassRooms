//fonction d'appel AJAX GET
function ajaxGet(url, callback){
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function () {
      if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
          //appel de la fonciton callback en lui passant la réponse du serveur en paramètre
          callback(req.responseText);
      } else {
          // Affichage des informations sur l'échec du traitement de la requête
          console.error(req.status + " " + req.statusText + " " + url);
      }
  });
  req.addEventListener("error", function () {
      // La requête n'a pas réussi à atteindre le serveur
      console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
}

//fonction d'affichage de la réponse
function afficher(reponse){
  console.log(reponse);
}

// ajaxGet("http://localhost:8888/OpenClassrooms/Javascript/javascript-web/javascript-web-srv/data/langages.txt", function(reponse){
//   console.log(reponse);
// });
