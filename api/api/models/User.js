
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Movie = require('./Movie');
let UserSchema = new Schema ({
    username: String,
    password: String,
    email: String,
    movies: [{
        type: Schema.ObjectId,
        ref: Movie
    }]
})

module.exports = mongoose.model('User', UserSchema);
