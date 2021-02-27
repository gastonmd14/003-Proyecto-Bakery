
const indexController = {

    list: (req, res, next) => {

        res.render('index', { style: 'index.css' });

      },

    about: (req, res, next) => {

      res.render('about', { style: 'about.css' });

    },

    message: (req, res, next) => {

      res.render('contact-form', { style: 'contact.css' });

    }

};

module.exports = indexController;