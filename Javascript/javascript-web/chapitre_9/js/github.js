var ulr = "";

var formElt = document.getElementById("form");
formElt.addEventListener("submit", function(e){
  e.preventDefault();

  var inputValue = formElt.elements.search.value;
  url = "https://api.github.com/users/" + inputValue;

  ajaxGet(url, function(reponse){
    var user = JSON.parse(reponse);
    console.log(reponse);
    var avatarElt = document.getElementById("avatar");
    avatarElt.src = null;
    avatarElt.src = user.avatar_url;

    var nomElt = document.getElementById("nom");
    nomElt.textContent = null;
    nomElt.textContent = user.name;

    var employeurElt = document.getElementById("employeur");
    employeurElt.textContent = null;
    employeurElt.textContent = user.company;

    var siteElt = document.getElementById("site");
    siteElt.textContent = null;
    siteElt.textContent = user.site_admin;
  });
});
