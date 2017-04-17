// Affichage d'un message de bienvenue + choix
// "Bienvenue dans le gestionnaire des contacts !"
// 1 : Lister les contacts
// 2 : Ajouter un contact
// 0 : Quitter


// Si l'utilisateur choisit "1 : Lister les contacts"
// Lister tous les contacts avec nom + prénom
// Répète les choix

// Si l'utilisateur choisit "2 : Ajouter un contact"
// Ajouter un contact
// Répète les choix

// Si l'utilisateur quitte
// Stop boucle
// Affiche message : Au revoir !

console.log("Bienvenue dans le gestionnaire des contacts !");

var Contact = {
    
    // Initialise le contact
    init : function(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    
    // Renvoie la description du contact
    decrire: function() {
        return "Nom : " + this.nom + ", prénom : " + this.prenom;
    }
};

// Créé les deux contacts de départ
var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");
var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

// Créé le tableau contacts et y ajoute les deux contacts de départ
var contacts = [];
contacts.push(contact1);
contacts.push(contact2);

var optionChoisie = null;

while (optionChoisie !== 0) {
    
    // Affiche les choix : 1, 2 ou 0
    console.log("1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
    
    var optionChoisie = Number(prompt("Choisissez une option"));
    
    // Utilisateur saisit 1 : liste des contacts
    if (optionChoisie == 1) {
        contacts.forEach( function(contact) {
            console.log(contact.decrire());
        });
    } 
    
    // Utilisateur saisit 2 : ajoute un contact
    else if (optionChoisie == 2) {
        var nouveauContact = Object.create(Contact);
        var nouveauContactNom = prompt("Quel est le nom de famille du contact ?");
        var nouveauContactPrenom = prompt("Quel est son prénom ?");
        nouveauContact.init(nouveauContactNom, nouveauContactPrenom);
        contacts.push(nouveauContact);
    }
    
    // Utilisateur saisit 0 : au revoir
    else {
        console.log("Au revoir !");
    }
};


