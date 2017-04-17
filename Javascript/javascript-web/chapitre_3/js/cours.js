document.getElementById("langages").innerHTML += '<li id="c">C</li>'; // séléctionne la balise ul et lui ajoute un li

//document.getElementById("langages").innerHTML = ''; //permet de vider la liste ul

document.querySelector("h1").textContent += ' de programmation'; // ajoute du contenu au titre

document.querySelector("h1").setAttribute("id", "titre"); //ajoute un attribut à l'élément séléctionné

document.querySelector("h1").id = "titre"; // équivalent de la ligne ci-dessus

document.querySelector("h1").classList.add("titre"); //ajoute la class titre à h1

document.querySelector("h1").classList.remove("debut"); //retire la class début à h1

console.log(document.querySelector("h1"));

var pythonElt = document.createElement("li"); // création d'un élément li
pythonElt.id = "python"; // on lui attribue un id
pythonElt.textContent = "Python"; //on lui atttribue un contenu textuel
document.getElementById("langages").appendChild(pythonElt); //Insertion du nouvel élément

var rubyElt = document.createElement("li");
rubyElt.id = "ruby";
rubyElt.appendChild(document.createTextNode("Ruby")); //Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt);

var JavascriptElt = document.createElement("li");
JavascriptElt.id = "Javascript";
JavascriptElt.textContent = "Javascript";
document.getElementById("langages").appendChild(JavascriptElt);

var perlElt = document.createElement("li");
perlElt.id = "perl";
perlElt.textContent = "Perl";
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));


document.getElementById("langages").insertAdjacentHTML("afterBegin", '<li>Swift</li>');

var bashElt = document.createElement("li");
bashElt.id = "bash";
bashElt.textContent = "Bash";
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));// on remplace Perl par Bash

document.getElementById("langages").removeChild(document.getElementById("bash"));

//Exercice


var lienWikiElt = document.createElement("a"); // on crée le noeud "lien" et on le complète
lienWikiElt.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
lienWikiElt.textContent = "liste";

var paragrapheElt = document.createElement("p"); // on crée le noeud paragraphe
paragrapheElt.appendChild(document.createTextNode("En voici une "));// on lui ajoute le premier morceau de la chaine !!appendChild ne prend en paramètre que des objets !!
paragrapheElt.appendChild(lienWikiElt);// le deuxième
paragrapheElt.appendChild(document.createTextNode(" plus complète")); //le dernier

document.getElementById("contenu").appendChild(paragrapheElt);
