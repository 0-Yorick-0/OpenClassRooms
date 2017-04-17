var h = document.head;
console.log(h);

var b = document.body;
console.log(b);

/*if (document.body.nodeType === document.ELEMENT_NODE)
    {
        console.log("Body est un noeud element");
    }
else{
        console.log("Body est un noeud textuel");
    }*/



var resultat = (document.body.nodeType = document.ELEMENT_NODE) ? "Body est element" : "Body est textuel"; // affichage en ternaire de la proprieté ndoeType de document.body

console.log(resultat);

console.log(document.body.childNodes[0]);

console.log(document.body.childNodes[1]);

for (var i = 0; i < document.body.childNodes.length; i++)//on parcours tous les enfants de document.body
    {
        console.log(document.body.childNodes[i]);
    }
