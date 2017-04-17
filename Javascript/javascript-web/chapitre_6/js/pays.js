// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

//transformation de l'input en minuscules avec première lettre en majuscule
function formatInput(input){
  var input = (input).charAt(0).toUpperCase() + input.substring(1).toLowerCase();
  return input;
}

document.getElementById("pays").addEventListener("input", function(e){
  var divElt = document.getElementById("suggestions");
  //on commence par vider la div
  divElt.innerHTML = "";

  //si l'input n'est pas vide...
  if (e.target.value !== "") {
    var input = formatInput(e.target.value);

    listePays.forEach(function(pays){
      var value = pays.indexOf(input);
      console.log(value);
      if (value === 0) {
        var divPays = document.createElement("div");
        divPays.classList.add("suggestion");
        divPays.textContent = pays;
        divElt.appendChild(divPays);

        divElt.addEventListener("click", function(e){
          document.getElementById("pays").value = e.target.textContent;
          divElt.innerHTML = "";
        });
      }
    });
  }
});
