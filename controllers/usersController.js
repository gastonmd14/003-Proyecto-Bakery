
const usersController = {

    login: (req, res, next) => {

        res.render('users/login-form', { style: '/users/login-form.css' });

      },

    register: (req, res, next) => {

      res.render('users/register-form', { style: '/users/register-form.css' });

    },


};

module.exports = usersController;