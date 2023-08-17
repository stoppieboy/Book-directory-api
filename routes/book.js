const router = require('express').Router()

const { create_book,delete_book,update_book,search_book } = require('../controllers/book')

router.route('/create').post(create_book)
router.route('/delete').delete(delete_book)
router.route('/search').get(search_book)
router.route('/update').put(update_book)

module.exports = router