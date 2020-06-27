const express = require('express');
const router = express.Router();
const controller = require('../controllers/login-controller');

router.get('/', (req, res, next) => {
    res.render('template', {
        title: 'Main Page',
        path: 'views/template', 
    });
});

router.get('/login', controller.login);

router.get('/signup', controller.signUp);

router.get('/template', controller.home);



// router.post('/insert', (req, res, next) => {
/************************************************
 * INSERT YOUR WEB ENDPOINT CODE HERE
 ************************************************/
// });

module.exports = router;