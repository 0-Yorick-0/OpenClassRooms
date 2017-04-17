var Film = {
    init: function (nom, annee, real) {
        this.nom = nom;
        this.annee = annee;
        this.real = real;
    },
    
    decrire: function() {
        var description = this.nom + " (" + this.annee + ", " + this.real + ")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Alien", 1989, "Ridley Scott");

var film2 = Object.create(Film);
film2.init("Night Of The Living Dead", 1959, "George A. Romero");

var film3 = Object.create(Film);
film3.init("The Dark Knight", 2010, "Christopher Nolan");

var listeFilm = [film1, film2, film3];


listeFilm.forEach(function (film) {
   console.log(film.decrire(film)); 
});
