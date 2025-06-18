const mongoose = require('mongoose')
const { userRole } = require('../utils/utils')
const { time } = require('../components/time')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enums: userRole,
        default: 'user'
    },
    time: {
        type: String,
        required: true,
        default: time()
    }
})

module.exports = new mongoose.model("Users", userSchema)