const express = require('express');
const router  = express.Router();
const ctrlAuth = require("../api/controllers/userController");



// router.get('/users', ctrlMovie.getMovies);
router.post('/signup', ctrlAuth.createUser);
router.post('/login', ctrlAuth.loginUser);
module.exports = router;
