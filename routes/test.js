const express = require('express');
const router = express.Router();

const {create} = require('../controllers/test')

router.route('/create').post(create);

module.exports = router;