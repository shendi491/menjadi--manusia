const mongoose = require('mongoose')

const seminarSchema = new mongoose.Schema({
    nama: String,
    asal: String,
    nohp: String,
    email: String,
    info: String
})

const seminar = mongoose.model('seminar', seminarSchema)

module.exports = seminar