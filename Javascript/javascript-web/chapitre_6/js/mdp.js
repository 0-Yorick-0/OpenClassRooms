var form = document.querySelector("form");

form.addEventListener("submit", function(e){
  var aideElt = document.getElementById('infoMdp');
  var text = "";
  var regex = /^[\d+\w_]{6}.*/
  if (!regex.test(form.elements.mdp1.value)) {
    text = "au moins un chiffre et 6 caractères";
  }else if (form.elements.mdp1.value !== form.elements.mdp2.value) {
    text = "Les mdp doivent matcher";
  }

  aideElt.textContent = text;

  e.preventDefault();
});
