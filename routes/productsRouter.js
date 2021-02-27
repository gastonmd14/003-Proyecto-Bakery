var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

/* GET home page. */
router.get('/', productsController.list);

module.exports = router;