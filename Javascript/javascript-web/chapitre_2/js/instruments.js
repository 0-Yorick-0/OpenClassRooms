function infosLiens(){
  var linksElt = document.querySelectorAll("a");
  var nbLinks = linksElt.length;
  console.log(nbLinks, linksElt[0].href, linksElt[nbLinks-1].href);
}

infosLiens();

function possede (id, classe) {
    var hasClass = document.getElementById(id);
    if (hasClass !== null)
        {
            console.log(hasClass.classList.contains(classe));
        }
    else
        {
            console.log("Aucnun élément ne possède l'identifiant contrebasse");
        }
}

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
