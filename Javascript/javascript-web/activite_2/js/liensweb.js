/*
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

var contenu = document.getElementById("contenu");
// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});


/*
Activité 2
*/

//la fonction fadeOut permet de faire progressivement disparaître le message au bout de 2s
function fadeOut(elt) {
  var op = 1;
  setTimeout(function(){
    var intervalId = setInterval(function(){
      if (op <= 0.1) {
        clearInterval(intervalId);
        elt.style.display = "none";
        elt.style.opacity = 1;
      }else{
        op -= 0.01;
        elt.style.opacity = op;
        console.log(op);
      }
    }, 20);
  }, 2000);
}

// 1) Gestion de l'apparition du formulaire
var buttonAdd = document.getElementById("buttonAdd");
var formElt = document.querySelector("form");
var messageElt = document.getElementById("message");
/*quand on clique sur le bouton, les proprietés "display" des éléments s'inversent,
 le formulaire apparait et le bouton "ajouter un lien" disparaît*/
buttonAdd.addEventListener("click", function(){
  formElt.style.display = "block";
  buttonAdd.style.display = "none";
});

// 2) Gestion de la validation du formulaire

//on ajoute un gestionnaire d'évenement sur le formulaire :
formElt.addEventListener("submit", function(e){
  //on empêche les données d'êtres envoyées, ainsi que le rechargement de la page
  e.preventDefault();

  //on récupère les valeurs des inputs
  var auteurValue = formElt.elements.auteur.value;
  var titreValue = formElt.elements.titre.value;
  var urlValue = formElt.elements.url.value;

  //on teste la présence de "http://" et on l'ajoute en cas d'absence
  var regexUrl = /^(http:\/\/|https:\/\/)/;
  if (!regexUrl.test(urlValue)) {
    urlValue = "http://" + urlValue
  }

  //on crée l'objet qui va contenir toutes nos informations
  var lien = {
    titre: titreValue,
    url: urlValue,
    auteur: auteurValue
  };

  //on fait une boucle forEach sur l'objet "lien", pour gérer l'affichage du lien
  var elementLien = creerElementLien(lien);
  contenu.insertBefore(elementLien, contenu.firstChild);

  messageElt.textContent = "Le lien vers \"" + titreValue + "\" a bien été ajouté.";
  messageElt.style.display = "block";

  //on lance la fonction fadeOut sur le message
  fadeOut(messageElt);

  //on vide le formulaire
  formElt.reset();

  //on fait disparaître le formulaire et réapparaître le premier bouton
  formElt.style.display = "none";
  buttonAdd.style.display = "inline-block";

});
