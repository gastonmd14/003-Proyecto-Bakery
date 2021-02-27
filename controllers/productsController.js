
const productsController = {

    list: (req, res, next) => {

        res.render('products/products', { style: '/products/products.css' });

      }

};

module.exports = productsController;