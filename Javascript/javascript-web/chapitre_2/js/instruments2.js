function infosLiens() {
    var liensElts = document.getElementsByTagName("a");
    var nombreLiens = liensElts.length;
    console.log(nombreLiens);
    
    var premierLien = liensElts[0].getAttribute("href");
    console.log(premierLien);
    
    var dernierLien = liensElts[nombreLiens - 1].getAttribute("href");
    console.log(dernierLien);
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