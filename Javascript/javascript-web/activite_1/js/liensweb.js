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

// TODO : compléter ce fichier pour ajouter les liens à la page web

listeLiens.forEach(function (liste) //utilisation d'une boucle forEach, plus adaptée aux tableaux d'objets
    {
        var pElt = document.createElement("p");// création d'un noeud p et attribution de la class "lien";
        pElt.setAttribute("class", "lien");
        pElt.style.width = "25%";// on lui donne une largeur de 25%

        var aElt = document.createElement("a");// on crée le noeud "a" et on lui ajoute son url ainsi que son contenu textuel
        aElt.href = liste.url;
        aElt.textContent = liste.titre + " ";
        aElt.style.fontWeight = "bold";// on en profite pour lui donner ses proprietés CSS au passage
        aElt.style.color = "#428bca";
        aElt.style.textDecoration = "none";

        pElt.appendChild(aElt); // insertion du noeud a dans le noeud p

        var spanElt = document.createElement("span"); // on crée le noeud span qui contiendra le reste

        // on construit étape par étape le contenu du noeud span
        spanElt.appendChild(document.createTextNode(liste.url));
        spanElt.appendChild(document.createElement("br"));
        spanElt.appendChild(document.createTextNode("Ajouté par "));
        spanElt.appendChild(document.createTextNode(liste.auteur));

        pElt.appendChild(spanElt);// on insère le noeud span dans le noeud p

        document.getElementById("contenu").appendChild(pElt);// on termine par l'insertion de l'élément p ainsi crée dans le DOM
    });
