
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Comment = require('./Comment');

// let Reviews = new Schema ({
//     Author: String,
//     rating: Number,
//     comment: String
// })
let ReviewsSchema = new Schema ({
    username: String,
    rating: String,
    description: String
})


let MovieSchema = new Schema ({
    Title	:	String,
    Year	:	Number,
    imdbID: String,
    Rated	:	String,
    Released	:	Date,
    Runtime	:	String,
    Plot	:	String,
    Language	:	String,
    Country	:	String,
    Awards	:	String,
    Poster	:	String,
    // Reviews: [{
    //     type: Schema.ObjectId,
    //     ref: Comment
    // }],

    Reviews: [ReviewsSchema],
    Ratings: String,
    VotesNumber: Number,
    Type	:	String,
    BoxOffice	:	String,
    Production	:	String,
    Website	:	String,
})

module.exports = mongoose.model('Movie', MovieSchema);
