// function afficherEnfant(noeud, indice) {
//     if (noeud.nodeType !== document.ELEMENT_NODE)
//         {
//             console.error("type de noeud incorrect");
//         }
//     else if (indice < 0)
//         {
//             console.error("Indice incorrect");
//         }
//     else if (indice > noeud.childNodes.length)
//         {
//             console.error("Indice incorrect");
//         }
//     else
//         {
//             console.log(noeud.childNodes[indice]);
//         }
// }
//
//
// afficherEnfant(document.body, 1);
//
// afficherEnfant(document.body, -1);
//
// afficherEnfant(document.body, 8);
//
// afficherEnfant(document.body.childNodes[0], 0);

/*var h = document.body.childNodes[0];

console.log(h);

console.log(h.childNodes[0]);*/








































//Exo enfants V2
// Affiche un enfant d'un objet du DOM
// Le paramètre noeud est l'objet du DOM
// Le paramètre indice est l'indice de l'enfant à afficher
function afficherEnfant(noeud, indice) {
    // TODO : compléter la fonction
    if (noeud.nodeType === document.ELEMENT_NODE) {
      if (indice > noeud.childNodes.length){
        console.log("Indice incorrect");
      }else if (indice < 0){
        console.log("Indice négatif");
      }else {
          console.log(noeud.childNodes[indice]);
      }
    }else{
      console.error("Type de noeud incorrect");
    }
}

// Doit afficher le noeud h1
afficherEnfant(document.body, 1);

// Doit afficher l'erreur "Indice incorrect"
// L'indice demandé est négatif
afficherEnfant(document.body, -1);

// Doit afficher l'erreur "Indice incorrect"
// Le noeud body a moins de 9 noeuds enfants
afficherEnfant(document.body, 8);

// Doit afficher l'erreur "Type de noeud incorrect"
// Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
afficherEnfant(document.body.childNodes[0], 0);
