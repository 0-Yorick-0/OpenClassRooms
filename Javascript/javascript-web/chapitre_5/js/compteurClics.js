function compteur() { //définition de la fonction hors paramètre, afin qu'elle fonctionne avec remove
    compteurClick++;
    document.getElementById("compteurClics").textContent = compteurClick;
}

var compteurClick = 0;

document.getElementById("clic").addEventListener("click", compteur);//si je clique, la fonction compteur se déclenche

document.getElementById("desactiver").addEventListener("click", function () {//si je clique, la fonction compteur est désactivée
   document.getElementById("clic").removeEventListener("click", compteur); 
});