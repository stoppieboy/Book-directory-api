const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        maxLength: [20, 'name cannot be more than 20 characters'],
    },
    author: {
        type: String,
        default: "unknown",
    },
    genre: {
        type: String,
        required: [true, "must provide a genre"],
    }
})

module.exports = mongoose.model('Book', BookSchema);