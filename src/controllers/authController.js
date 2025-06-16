const { Users } = require("../models")
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

module.exports.login = async (req, res) => {
    try {
        const { username, password } = req.body

        const existUser = await Users.findOne({username})

        if(!existUser){
            return res.status(401).json({
                message: "Bunday user topilmadi!",
                success: false
            })
        }

        const passDecode = CryptoJS.AES.decrypt(existUser.password, process.env.PASSWORD_KEY).toString(CryptoJS.enc.Utf8)
        console.log(passDecode)
        console.log(password)

        if(passDecode != password){
            return res.status(401).json({
                message: "Parolda xatolik!",
                success: false
            })
        }

        const token = jwt.sign({id: existUser._id}, process.env.JWT_KEY)
        existUser.password = undefined
        existUser._id = undefined

        res.status(200).json({
            message: "Muafaqiyatli ro'yxatdan o'tdingiz!",
            success: true,
            token,
            user: existUser
        })


    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

module.exports.register = async (req, res) => {
    try{
        const {name, surname, username, email, password} = req.body

        const existUser = await Users.findOne({email})

        if(existUser && existUser.username === username){
            return res.status(409).json({
                message: "Bu user allaqachon mavjud",
                success: false
            })
        }

        const newUser = new Users({name, surname, username, email, password: CryptoJS.AES.encrypt(password, process.env.PASSWORD_KEY).toString()})
        await newUser.save()

        const token = jwt.sign({id: newUser._id}, process.env.JWT_KEY)

        res.status(200).json({
            message: "Muafaqiyatli ro'yxatdan o'tingiz!",
            success: true,
            token
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

module.exports.getMe = async (req, res) => {
    try{
        const id = req.params.id

        const existUser = await Users.findById(id)

        if(!existUser){
            return res.status(401).json({
                message: "Bunday user topilmadi!",
                success: false
            })
        }
        existUser._id = undefined
        existUser.password = undefined

        res.status(200).json({
            user: existUser,
            success: true
        })
    }catch(err){
        res.status(500).json({
            message: err.message,
            success: false
        })
    }
}