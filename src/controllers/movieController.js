const { Movie } = require("../models")

module.exports.movieCreate = async (req, res) => {
    try{
        const {title, description, genre, movieType, series, year} = req.body

        const existMovie = Movie.findOne({title})

        if(existMovie){
            return res.status(409).json({
                message: "Bunday kino avvaldan mavjud",
                success: false
            })
        }

        const newMovie = new Movie({title, description, photo: req.files['photo']?.[0] ? `http://localhost:3000/uploads/${req.files['photo']?.[0].filename}` : null, genre, movieType, series, year, trailer: req.files['trailer']?.[0] ? `http://localhost:3000/uploads/${req.files['trailer']?.[0].filename}` : null})
        await newMovie.save()

        res.status(200).json({
            message: "Kino yaratildi!",
            success: true
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}