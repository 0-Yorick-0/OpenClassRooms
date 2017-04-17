// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

var i = 1;
var divElt = document.getElementById("contenu");
questions.forEach(function(question){

  var pElt = document.createElement("p");
  var questionElt = document.createElement("strong");
  questionElt.textContent = "Question " + i + " : ";
  pElt.appendChild(questionElt);
  pElt.appendChild(document.createTextNode(question.enonce));
  divElt.appendChild(pElt);

  var buttonElt = document.createElement("button");
  buttonElt.textContent = "Afficher la réponse";
  divElt.appendChild(buttonElt);

  i++;

  buttonElt.addEventListener("click", function(){
    var reponseElt = document.createElement("p");
    reponseElt.textContent = question.reponse;
    divElt.replaceChild(reponseElt, buttonElt);
  });
});
