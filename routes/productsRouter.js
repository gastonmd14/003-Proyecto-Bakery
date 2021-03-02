var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

/* GET home page. */

router.get('/', productsController.list);

router.get('/details', productsController.detail);

module.exports = router;