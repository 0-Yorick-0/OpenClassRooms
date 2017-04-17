var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var article = new FormData(form);
    // ajaxPost("http://oc-jswebsrv.herokuapp.com/article", article, function (reponse) {
    //     var messageElt = document.getElementById("p");
    //     messageElt.textContent = "L'article a bien été ajouté.";
    // }, false);

    ajaxPost("http://localhost:8888/OpenClassrooms/Javascript/javascript-web/javascript-web-srv/post_form.php", article, function () {}, false);
});
