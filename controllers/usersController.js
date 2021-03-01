
const usersController = {

    login: (req, res, next) => {

        res.render('users/login-form', { style: '/users/login.css' });

      },

    register: (req, res, next) => {

      res.render('users/register-form', { style: '/users/register.css' });

    },


};

module.exports = usersController;