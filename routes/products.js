var express = require('express');
var router = express.Router();
var productsController = require('../controllers/products')

/* GET home page. */
router.get('/', productsController.list);

module.exports = router;