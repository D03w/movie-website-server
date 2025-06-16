const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.ObjectId,
        ref: "Movie",
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "Users",
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

module.exports = new mongoose.model("Comment", commentSchema)