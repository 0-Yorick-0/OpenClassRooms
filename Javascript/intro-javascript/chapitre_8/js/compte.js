var CompteBancaire = {
    initCB: function (titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde;
    },
        
    debiter: function (montant) {
        this.solde -= montant;
        return this.solde;
    },
    
    crediter: function (montant) {
        this.solde += montant;
        return this.solde;
    },
    
    decrire: function() {
        var description = this.titulaire + " possède " + this.solde + " euros sur son compte.";
        return description;
    }
};


//l'objet CompteEpargne hérite des propriétés de son prototype, et ajoute une méthode de calcul du solde avec intérêts.
var CompteEpargne = Object.create(CompteBancaire);
CompteEpargne.initCE = function (titulaire, solde, TI) {
        this.initCB(titulaire, solde);
        this.TI = TI;
    };
    
CompteEpargne.ajouterInterets = function (solde, TI) {
        this.solde = this.solde*(1+this.TI);
    };

    
var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);
    
console.log("Voici l'état initial des comptes:");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Saisissez un montant à transférer entre les deux comptes"));

compte1.debiter(montant);
compte2.crediter(montant);

compte2.ajouterInterets();

console.log("Voici l'état final des comptes:");
console.log(compte1.decrire());
console.log(compte2.decrire());

