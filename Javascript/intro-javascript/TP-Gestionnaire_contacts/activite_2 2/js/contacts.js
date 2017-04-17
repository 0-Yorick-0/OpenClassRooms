/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var Contact = {
    // Initialise le contact
    init: function (prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    },
    // Renvoie les infos du contact
    decrire: function () {
        var description = "Nom : " +this.nom + ", prénom : " + this.prenom;
        return description;
    }
};

function listeChoix(){
	console.log("------------------------");
	console.log("1 : Lister les contacts");
	console.log("2 : Ajouter un contact");
	console.log("0 : Quitter");	
	choix = prompt("Choissisez une option :");
	return choix;
}

function listeContacts(){
	contacts.forEach(function (contact) {
			console.log(contact.decrire());
	});
}

var contacts = []; // init du tableau des contacts

// création a la vollé du premier contadct
var contact = Object.create(Contact);
contact.init("Carole", "Lévisse");
contacts.push(contact);

// création a la vollé du deuxieme contadct
var contact = Object.create(Contact);
contact.init("Mélodie", "Nelsonne");
contacts.push(contact);


console.log("Bienvenue dans le gestionnaire des contacts !");//message de bienvenue

var choix = true;
while (choix !== "0") {
	listeChoix(); // on affiche la listes des choix

	if(choix === '1'){ // affichage de la liste
		console.log("------------------------");
		console.log("Voici la liste de tous vos contacts :");
		// listing des contacts
		listeContacts();
		
	}else if(choix === '2'){ // ajout d'un nouveau contact
		var nom = prompt("Entrez le nom du nouveau contact :");
		var prenom = prompt("Entrez le prénom du nouveau contact :");
		var contact = Object.create(Contact);
		contact.init(prenom, nom);
		contacts.push(contact);
		console.log("------------------------");
		console.log("Le nouveau contact a été ajouté");
		
	}else{ // exit
		console.log("------------------------");
		console.log("Au revoir !");
	}
	
}

