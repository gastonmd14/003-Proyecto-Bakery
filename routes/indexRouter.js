var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.show);
router.get('/search', indexController.search);
router.get('/about', indexController.about);
router.get('/contact', indexController.message);

module.exports = router;
