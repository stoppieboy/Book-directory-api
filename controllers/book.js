// const mongoose = require('mongoose')
const book_model = require('../models/book')

const create_book = async(req, res) => {
    const result = await book_model.create(req.body)
    res.status(200).json({ result })
}

const search_book = async(req, res) => {
    const result = await book_model.find(req.body)
    res.status(200).json({ result })
}

const delete_book = async(req, res) => {
    const result = await book_model.deleteOne(req.body)
    res.status(200).json({ result })
}

const update_book = async(req, res) => {
    const result = await book_model.updateOne(req.body.original, req.body.updated)
    res.status(200).json({ result })
}

module.exports = {
    create_book,
    search_book,
    delete_book,
    update_book,
}