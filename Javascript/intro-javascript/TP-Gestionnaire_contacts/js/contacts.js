/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

// on crée d'abord l'objet Contact qui propose la méthode d'initialisation et de description des futurs contacts
var Contact = {
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    
    decrire: function () {
        return description = "Nom : " + this.nom + ", prénom : " + this.prenom;
    }
};

//on crée ensuite les deux contacts imposés
var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");


//On affiche en premier lieu le message de bienvenue et le menu
console.log("Bienvenue dans le gestionnaire de contacts !");
console.log("1 : Lister les contacts");
console.log("2 : Ajouter un contact");
console.log("0 : Quitter");
console.log("");//une ligne vide pour la lisibilité


//on demande une première fois à l'utilisateur ce qu'il veut faire
var choix = Number(prompt("Que souhaitez-vous faire"));

if (isNaN(choix) || choix < 0 || choix > 2){//on vérifie que le choix de l'utilisateur est bien un nombre valide
    console.log("Votre réponse n'est pas valide, merci de séléctionner une option du menu avec un chiffre.")
    var choix = Number(prompt("Que souhaitez-vous faire"));
}

//création d'un tableau dans lequel on va ajouter tout les contacts
var listeContacts = [contact1, contact2];


//on lance la boucle dans laquelle restera l'utilisateur tant qu'il n'aura pas souhaité quitter
while (choix !== 0) {
    if (choix === 2){// protocole d'ajout de contact
        var Nom = prompt("Saisissez le nom de votre contact");
        var Prenom = prompt("Saisissez le prenom de votre contact");

        var contact = Object.create(Contact);//creation d'un nouveau contact ayant pour prototype l'objet "Contact"
        contact.init(Nom, Prenom);
        
        listeContacts.push(contact);//on ajoute ce nouveau contact dans notre tableau
        
        console.log("Le contact a bien été ajouté");//on confirme l'ajout du contact
        console.log("");
        
        console.log("1 : Lister les contacts");
        console.log("2 : Ajouter un contact");
        console.log("0 : Quitter");
        console.log("");

    }else if (choix ===1) {//si l'utilisateur veut voir la liste
        console.log("Voici la liste de tous vos contacts :");
        listeContacts.forEach(function(contact){//une boucle forEach permet de dérouler la liste
           console.log(contact.decrire(contact));
        });
            console.log("");
            console.log("1 : Lister les contacts");
            console.log("2 : Ajouter un contact");
            console.log("0 : Quitter");
            console.log("");
    }
   var choix = Number(prompt("Que souhaitez-vous faire")); //on demande à nouveau le choix de l'utilisateur avant de relancer la boucle
    if (isNaN(choix) || choix < 0 || choix > 2){
    console.log("Votre réponse n'est pas valide, merci de séléctionner une option du menu avec un chiffre.")
    var choix = Number(prompt("Que souhaitez-vous faire"));
}
};

console.log("Merci et à bientôt");// un petit message d'au revoir, on n'est pas des bêtes non plus ;)