module.exports.time = () => {
    const date = new Date()

    const day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay()
    const month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
    const year = date.getFullYear()

    const hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    const minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()

    const time = `${day}.${month}.${year}, ${hour}:${minute}`
    return time
}