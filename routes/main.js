const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login-controller');
const movieController = require('../controllers/movie-controller');

router.get('/', (req, res, next) => {
    res.render('template', {
        title: 'Main Page',
        path: 'views/template', 
    });
});

router.get('/login', loginController.login);

router.get('/signup', loginController.signUp);

router.get('/template', loginController.home);

router.get('/addMoviePage', movieController.addMoviePage)

router.post('/addUser', loginController.addUser);

router.post('/postLogin', loginController.postLogin);

router.post('/addMovie', movieController.addMovie);



// router.post('/insert', (req, res, next) => {
/************************************************
 * INSERT YOUR WEB ENDPOINT CODE HERE
 ************************************************/
// });

module.exports = router;