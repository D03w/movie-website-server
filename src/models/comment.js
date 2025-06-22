const mongoose = require('mongoose')
const { time } = require('../components/time')

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
    },
    like: {
        type: Number,
        required: true,
        default: 0
    },
    time: {
        type: String,
        required: true,
        default: time()
    }
})

module.exports = new mongoose.model("Comment", commentSchema)