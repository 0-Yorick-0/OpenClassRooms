document.addEventListener("keypress", function(e){
  var divElts = document.getElementsByTagName("div");
  console.log(e.charCode);
  var touche = String.fromCharCode(e.charCode).toLowerCase();
  switch (touche) {
    case "r"://touche r
      for (var i = 0; i < divElts.length; i++) {
        divElts[i].style.backgroundColor = "red";
      }
    break;
    case "j"://touche r
      for (var i = 0; i < divElts.length; i++) {
        divElts[i].style.backgroundColor = "yellow";
      }
    break;
    case "v"://touche r
      for (var i = 0; i < divElts.length; i++) {
        divElts[i].style.backgroundColor = "green";
      }
    break;
    case "b"://touche r
      for (var i = 0; i < divElts.length; i++) {
        divElts[i].style.backgroundColor = "white";
      }
    break;
    default:

  }
});
