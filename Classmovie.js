// write a class for movie?

class movie{
    constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating
    }
    static getPG(movie){
        return movie.filter(movie => movie.rating == "PG");
    }
}

let movie1 = new movie("Casino Royale", "Eon Productions", "PG13");

let arrmovie = [
    new movie("movies2", "studio1","PG"),
    new movie("movies3", "studio2","PG-12"),
    new movie("movies4", "studio3","P"),
    new movie("movies5", "studio4","PG")
]

let m = movie.getPG(arrmovie);
console.log(arrmovie)
console.log(m)

