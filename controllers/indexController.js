
const indexController = {

    show: (req, res, next) => {

        res.render('index', { style: 'index.css' });

      },

    search: (req, res, next) => {

      

    },

    about: (req, res, next) => {

      res.render('about', { style: 'about.css' });

    },

    message: (req, res, next) => {

      res.render('contact-form', { style: 'contact-form.css' });

    }

};

module.exports = indexController;