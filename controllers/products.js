
const productsController = {

    list: function(req, res, next) {

        res.render('products/products', { title: 'Express' });

      }
      
};

module.exports = productsController;