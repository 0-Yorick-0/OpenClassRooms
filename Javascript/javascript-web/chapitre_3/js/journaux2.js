//Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

for (var i = 0; i < journaux.length; i++)
    {
        var aElt = document.createElement("a");
        aElt.href = journaux[i];
        aElt.textContent = journaux[i] + " ";
        
        document.getElementById("contenu").appendChild(aElt);
        document.getElementById("contenu").appendChild(document.createElement("br"));
    }