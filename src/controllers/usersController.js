const { Users } = require("../models")

module.exports.getAll = async (req, res) => {
    try{
        const findAll = await Users.find({role: 'user'}).sort({_id: -1})

        res.status(200).json({
            data: findAll,
            success: true
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}