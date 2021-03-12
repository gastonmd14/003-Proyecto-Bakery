const db = require("../database/models");
const { Op } = require("sequelize");

const productsController = {

  list: (req, res, next) => {

    db.Product.findAll()
    .then((r) => {console.log(r);})
    .then((e) => {console.log(e);})

    res.render('products/products', { style: '/products/products.css' });

  },

  cart: (req, res, next) =>{

    res.render('products/cart', { style: '/products/cart.css' });

  },

  detail: (req, res, next) => {

    res.render('products/details', { style: '/products/details.css' });

  }

};

module.exports = productsController;