// // Création d'une requête HTTP
// var req = new XMLHttpRequest();
// // Requête HTTP GET synchrone vers le fichier langages.txt publié localement
// req.open("GET", "http://localhost:8888/OpenClassrooms/Javascript/javascript-web/javascript-web-srv/data/langages.txt", false);
// // Envoi de la requête
// req.send(null);
// // Affiche la réponse reçue pour la requête
// console.log(req.responseText);

//transformation d'un objet en chaîne de caractère conforme au format JSON
// var avion = [
//   {
//   marque : "Airbus",
//   couleur : "A320"
//   },
//   {
//   marque : "Airbus",
//   couleur : "A380"
//   }
// ];
//
// console.log(avion);
//
// var textAvion = JSON.stringify(avion);
// console.log(textAvion);
//
// //transformation en objet
// console.log(JSON.parse(textAvion));
//
// ajaxGet("http://localhost:8888/OpenClassrooms/Javascript/javascript-web/javascript-web-srv/data/films.json", function(reponse){
//   var films = JSON.parse(reponse);
//
//   films.forEach(function(film){
//     console.log(film.titre);
//   });
// });

//Exercice

ajaxGet("http://localhost:8888/OpenClassrooms/Javascript/javascript-web/javascript-web-srv/data/langages.txt", function(reponse){
  var tabLangages = reponse.split(";");

  var ulElt = document.getElementById("langages");
  tabLangages.forEach(function(langage){
    var liElt = document.createElement("li");
    liElt.textContent = langage;
    ulElt.appendChild(liElt);
  });

});
