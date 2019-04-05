const express = require('express');
const router  = express.Router();
const ctrlAuth = require("../api/controllers/commentController");




router.post("/movie/coment", ctrlAuth.insertComment);
module.exports = router;
