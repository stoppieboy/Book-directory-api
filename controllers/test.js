const Book = require('../models/book')

const create = async (req, res) => {
    const book = await Book.create(req.body)
    res.status(200).json({ book });
}

module.exports = {
    create
}