var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

/* GET home page. */

router.get('/', productsController.list);

router.get('/cart', productsController.cart);

router.get('/:id', productsController.detail);

module.exports = router;