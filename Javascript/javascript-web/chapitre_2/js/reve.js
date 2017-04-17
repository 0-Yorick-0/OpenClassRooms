// TODO : écrire la fonction compterElements
function compterElements(elt){
  return nbElt = document.querySelectorAll(elt).length;
}

console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2
