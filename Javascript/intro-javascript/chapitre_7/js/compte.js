var compte = {
    titulaire: "Alex",
    solde: 0,
    
    crediter: function(credit) {
        this.solde = this.solde + credit;
        return this.solde;
    },
    
    debiter: function(debit) {
        this.solde = this.solde - debit;
        return this.solde;
    },
    
    decrire: function (){
        var description = this.titulaire + " possède " + this.solde + " euros sur son compte";
    return description;
}
};

console.log(compte.decrire());

//on entre la valeur du credit et on credite le compte
var credit = Number(prompt("Saisissez un credit"));

compte.crediter(credit);

console.log(compte.decrire());

// on entre la valeur du débit et on débite le compte

var debit = Number(prompt("Saisissez un débit"));

compte.debiter(debit);

console.log(compte.decrire());