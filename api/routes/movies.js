const express = require('express');
const router  = express.Router();
const ctrlMovie = require("../api/controllers/movieController");
const ctrlComment = require("../api/controllers/commentController");

// router.get('/movies/names', ctrlMovie.getMoviesNames);
router.get('/', (req,res) => {
  res.status(400).send("prueba");
});
router.get('/movie', ctrlMovie.getMovies);
router.get('/movie/:movieId', ctrlMovie.getMovie);
router.post('/movie', ctrlMovie.addMovie);
router.post('/movie/comment', ctrlComment.insertComment);
module.exports = router;
