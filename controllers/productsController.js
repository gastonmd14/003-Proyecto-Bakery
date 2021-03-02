
const productsController = {

  list: (req, res, next) => {

    res.render('products/list', { style: '/products/list.css' });

  },

  detail: (req, res, next) => {

    res.render('products/details', { style: '/products/details.css' });

  }

};

module.exports = productsController;