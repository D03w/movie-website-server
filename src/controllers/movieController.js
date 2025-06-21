const { Movie } = require("../models")
const { movieType } = require("../utils/utils")

module.exports.movieCreate = async (req, res) => {
    try{
        const {title, description, genre, movieType, series, season, year} = req.body

        const existMovie = await Movie.findOne({title})

        if(existMovie){
            return res.status(409).json({
                message: "Bunday kino avvaldan mavjud",
                success: false
            })
        }

        const newMovie = new Movie({title, description, photo: req.files['photo']?.[0] ? `http://localhost:3000/uploads/${req.files['photo']?.[0].filename}` : null, genre, movieType, series, year, season, trailer: req.files['trailer']?.[0] ? `http://localhost:3000/uploads/${req.files['trailer']?.[0].filename}` : null})
        await newMovie.save()

        res.status(200).json({
            message: "Kino yaratildi!",
            success: true
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

module.exports.getMovie = async (req, res) => {
    try{
        const allMovie = await Movie.find().populate("genre").sort({_id: -1})

        res.status(200).json({
            data: allMovie,
            success: true
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}
module.exports.updateMovies = async (req, res) => {
    try{
        const id = req.params.id
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

module.exports.getOne = async (req, res) => {
    try{
        const id = req.params.id

        const findMovie = await Movie.findById(id)

        res.status(200).json({
            data: findMovie,
            success: true
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}