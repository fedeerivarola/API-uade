let Movie = require('../models/Movie');

let movies = require('../../scripts/moviesCompleted.json');
// let movieNames = require('../../moviesNames.json')
// TODO limpiar todo este codigo

let addMovie = function (req, res){
  Movie.findOne({"Title": req.body.Title})
  .then(
    (movie)=>{
      if(!movie){
        let newMovie = new Movie(req.body)

        newMovie.save()
        .then(
          (movieSaved)=>{
            res.status(200).send(movieSaved)
          },
          (err)=>{
            res.status(500).send(err)
          }
        )
      }
      // res.status(400).send(movie);
    },
    (err)=>{
      res.status(200).send(err);
    })
    return
    let movie = new Movie(req.body);
    res.status(400).send(movie);
}

let getMovies = function (req, res) {
  let perPage = 20;
  let page = req.params[0];

  Movie.find()
  .skip(perPage * page)
  .limit(perPage)
  .then(
    (movies)=>{
      res.status(200).send(movies)
    },
    (err)=>{
      res.status(500).send(err)
    }
  )
};

let addAllMovies = function(req, res){
  console.log(movies[0]);
  movies.map(
    (moviesArray)=>{
      moviesArray.map(
      (movie)=>{
        if(movie.Poster != "N/A")
        Movie.findOne({"Title": movie.Title})
        .then(
          (movieFound)=>{

            if(!movieFound){
              let newMovie = new Movie(movie)

              newMovie.save()
              .then(
                  (movieSaved)=>{
                    console.log(movieSaved.Title);
                    // res.status(200).send(movieSaved)
                  },
                  (err)=>{
                    // res.status(500).send(err)
                    console.log(err)
                  }
                )
              }

          },
          (err)=>{
            // res.status(200).send(err);
            console.log(err);
          })
      
      }
    )}
  )
  res.status(200).send("a")
}

getMovie = function(req, res){
  Movie.findOne({imdbID: req.params.movieId})
  .then(  
    (movie)=>{
      res.status(200).send(movie)
    },
    (err)=>{res.status(500).send(err)}
  )
}

module.exports = {
    addMovie,
    getMovies,
    addAllMovies,
    getMovie

};
