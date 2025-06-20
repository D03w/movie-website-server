const mongoose = require('mongoose')
const { movieType } = require('../utils/utils')
const { time } = require('../components/time')

const moviveSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true
    },
    genre: {
        type: mongoose.Schema.ObjectId,
        ref: "Genre",
        required: true
    },
    movieType: {
        type: String,
        enums: movieType,
        required: true,
    },
    series: {
        type: mongoose.Schema.ObjectId,
        ref: "Movie",
        validate: {
            validator: (v) => {
                if(this.movieType === 'series' || this.movieType === 'animeSeries'){
                    return !!v
                }
                return true
            }
        },
    },
    season: {
        type: Number,
        validate: {
            validator: (v) => {
                if(this.movieType === "series" || this.movieType === "animeSeries"){
                    return !!v
                }
                return true
            }
        }
    },
    year: {
        type: Number,
        required: true
    },
    trailer: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        default: 0
    },
    time: {
        type: String,
        required: true,
        default: time()
    }
})

module.exports = new mongoose.model("Movie", moviveSchema)