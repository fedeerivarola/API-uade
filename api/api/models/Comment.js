
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let User = require('./User');
let CommentSchema = new Schema ({
    // Username: {
    //     type: Schema.ObjectId,
    //     ref: User
    // },
    Username:String,
    Description: String,
    Rating: Number
})


module.exports = mongoose.model('Comment', CommentSchema);
