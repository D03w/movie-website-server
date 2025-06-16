const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.ObjectId,
        ref: "Movie",
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "Users",
        required: true
    }
})

module.exports = new mongoose.model("Like", likeSchema)