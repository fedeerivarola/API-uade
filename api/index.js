const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const moviesRouter = require('./routes/movies');
const authRouter = require('./routes/auth');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/dist/')));

// ***** MONGODB CONNECTION
require("./config/db");

// ***** API ROUTING
app.use('/api/auth', authRouter);
app.use('/api', moviesRouter);


const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


module.exports = app;
