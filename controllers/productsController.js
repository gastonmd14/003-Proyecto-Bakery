
const productsController = {

  list: (req, res, next) => {

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