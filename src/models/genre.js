const mongoose = require('mongoose')
const { time } = require('../components/time')

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true,
        default: time()
    }
})

module.exports = new mongoose.model("Genre", genreSchema)