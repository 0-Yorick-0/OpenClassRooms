var films = ["Film1", "Film2", "Film3"];

console.log(films.length);

//console.log(films[0]);

for (var i = 0; i < films.length; i++) {
    console.log(films[i]);
}

films.forEach(function (film) {
        console.log(film);
});

films.push("Film4");

console.log(films[3]);

var Film = {
    init: function(film, annee) {
        this.film = film;
        this.annee = annee;
    },
    
    decrire: function (){
        var description = this.film + ", " + this.annee;
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Alien", 1989);
var film2 = Object.create(Film);
film2.init("Night Of The Living Dead", 1959);
var film3 = Object.create(Film);
film3.init("The Dark Knight", 2010);

var films = [];

films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
   console.log(film.decrire(film)); 
});