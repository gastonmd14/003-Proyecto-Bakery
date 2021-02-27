
const indexController = {

    list: (req, res, next) => {

        res.render('index', { style: 'index.css' });

      }

};

module.exports = indexController;