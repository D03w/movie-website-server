const { Genre } = require("../models")

module.exports.createGenre = async (req, res) => {
    try{
        const {name} = req.body

        const existGenre = await Genre.findOne({name})

        if(existGenre){
            return res.status(409).json({
                message: "Bunday janr avvaldan mavjud!",
                success: false
            })
        }

        const newGenre = new Genre({name, photo: req.file ? `http://localhost:3000/uploads/${req.file.filename}` : null})
        await newGenre.save()

        res.status(200).json({
            message: "Yangi janr yaratildi!",
            success: true
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}
module.exports.getGenre = async (req, res) => {
    try{
        const allGenre = await Genre.find().sort({_id: -1})

        res.status(200).json({
            data: allGenre,
            success: true
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}
module.exports.updateGenre = async (req, res) => {
    try{
        const id = req.params.id
        const {name} = req.body

        const updatedGenre = await Genre.findByIdAndUpdate(id, {name})

        res.status(200).json({
            message: "Janr muafaqiyatli yangilandi",
            success: false
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

module.exports.deleteGenre = async (req, res) => {
    try{
        const id = req.params.id

        await Genre.findByIdAndDelete(id)

        res.status(200).json({
            message: "Janr o'chirib tashlandi!",
            success: true
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}