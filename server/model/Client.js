const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Numer
    },
})

module.exports = mongoose.model('Client', ClientSchema)