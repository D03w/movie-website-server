const mongoose = require('mongoose')

const saveSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.ObjectId,
        ref: "Movie",
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "USers",
        required: true
    }
})

module.exports = new mongoose.model("Save", saveSchema)