var form = document.querySelector("form");

form.addEventListener("submit", function(e){
  e.preventDefault();

  var temoignage = {
      pseudo: form.elements.pseudo.value,
      evaluation: form.elements.evaluation.value,
      message: form.elements.message.value
  };

  console.log(temoignage);

  ajaxPost("http://oc-jswebsrv.herokuapp.com/api/temoignage", temoignage, function(reponse){
    console.log("le fomulaire " + JSON.stringify(temoignage) + " a bien été envoyé");
  }, true);
})
