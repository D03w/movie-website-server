const { Comment } = require("../models")

module.exports.create = async (req, res) => {
    try{
        const {movie, user, comment} = req.body

        const newComment = new Comment({movie, user, comment})
        await newComment.save()

        res.status(200).json({
            message: "Muafaqiyatli fikr qoldirildi!",
            success: true
        })
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

        const findComments = await Comment.find({movie: id}).populate("user")

        res.status(200).json({
            data: findComments,
            success: true
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}
module.exports.deleteComment = async (req, res) => {
    try{
        const id = req.params.id

        await Comment.findByIdAndDelete(id)

        res.status(200).json({
            message: "Fikr o'chirib tashlandi!",
            success: true
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

module.exports.update = async (req, res) => {
    try{
        const id = req.params.id
        const {comment} = req.body

        await Comment.findByIdAndUpdate(id, {comment})

        res.status(200).json({
            message: "Koment yangilandi!",
            success: true
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}