// ****** DEV
const mongoose = require('mongoose');
let Movie = require('../api/models/Movie');
let gracefulShutdown;
let dbURI = 'mongodb://127.0.0.1:27017/APIMRI';
const ctrlMovie = require("../api/controllers/movieController");

// if (process.env.NODE_ENV === 'production') {
//     dbURI = process.env.MONGOLAB_URI;
// }

mongoose.connect(dbURI, {useNewUrlParser: true});

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to database');
    Movie.find()
    .then(
        (movies)=>{
            if(movies.length === 0 ) {
                ctrlMovie.addAllMovies();
                // console.log("added all movies")
            }
        }
    )
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};
// For nodemon restarts
process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});
