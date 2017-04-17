document.querySelector("button").addEventListener("click", function(e){
  var dessert = prompt("Rentrez un dessert");

  var liElt = document.createElement("li");
  liElt.textContent = dessert;
  document.getElementById("desserts").appendChild(liElt);

  liElt.addEventListener("click", function(){
      var nouveau = prompt("Rentrez un nouveau dessert");
      this.textContent = nouveau;
  });
});
