var Comment = require('../models/Comment');
var bodyParser = require('body-parser');

let Movie = require('../models/Movie');
let getComment = (req, res) =>
{      
    console.log("Comentario leido");
    //Listar resultados
    Comment.find()
    .then
    (
        (listaComment)=>
        {
            res.send(listaComment); //devuelvo resultado query       
        },
        (err)=>{console.log(err);}
    )       
};

let insertComment = (req,res) =>
{
    console.log(req.body);
    // var newComment = Comment({
    //     username: req.body.username,
    //     description: req.body.description,
    //     rating: req.body.rating
    // });
    // newComment.save().
    // then
    // (
    //     (newComment)=>
    //     {
    //         res.send(newComment); //devuelvo resultado query       
    //     },
    //     (err)=>{console.log(err);}
    // ) 

    Movie.findOne({imdbID: req.body.movieId})
    .then(
        (movie)=>{
            if(movie==null){
                res.status(400).send("movie not found");
                return
            }

            movie.Reviews.push(req.body);
            movie.save()
            .then(
                (movieSaved)=>{res.send("done")},
                (err)=>{res.satus(500).send(err)}
            )
        }
    )
}

module.exports = {getComment,insertComment};

