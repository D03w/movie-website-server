const jwt = require('jsonwebtoken')
const { Users } = require('../models')


const tokenDecode = async (req) => {
    const bearerHeader = req.headers.authorization

    if(bearerHeader){
        const token = bearerHeader.split(' ')[1]
        try{
            return jwt.verify(token, process.env.JWT_KEY)
        }catch(err){
            console.log(err)
        }
    }else{
        return false
    }
}

module.exports.verifyToken = async (req, res, next) => {
    try{
        const decoded = await tokenDecode(req)

        if(decoded){
            const findUser = await Users.findById(decoded.id)

            if(!findUser){
                return res.status(401).json({
                    message: "User topilmadi!",
                    success: false
                })
            }

            req.users = findUser
            next()
        }else{
            return false
        }
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}