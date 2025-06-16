const { Users } = require('../models')
const CryptoJS = require('crypto-js')

module.exports.createAdmin = async () => {
    const adminName = process.env.ADMIN_NAME
    const adminSurname = process.env.ADMIN_SURNAME
    const adminUsername = process.env.ADMIN_USERNAME
    const adminEmail = process.env.ADMIN_EMAIL
    const adminPassword = process.env.ADMIN_PASSWORD
    const adminRole = process.env.ADMIN_ROLE

    try {
        const existAdmin = await Users.find({ adminEmail })

        if (existAdmin != null) {
            return true
        }

        const createAdmin = new Users({name: adminName, surname: adminSurname, username: adminUsername, email: adminEmail, password: CryptoJS.AES.encrypt(adminPassword, process.env.PASSWORD_KEY).toString(), role: adminRole})
        await createAdmin.save()

        console.log("Admin yaratildi!")
    } catch (err) {
        console.log(err)
    }
}