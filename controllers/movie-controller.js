const Movie = require('../data/movie');

exports.addMoviePage = (req, res, next) => {
    res.render('addMovie', {
        title: 'Add Movie',
        path: 'views/addMovie',
        // activeTA03: true, // For HBS
        // contentCSS: true, // For HBS
    });
}

exports.addMovie = (req, res, next) => {
    // if(!req.session.isLoggedIn){
    //     res.redirect('/login');
    // }
    const title = req.body.title;
    const description = req.body.description;
    // const email = req.session.email;
    const movie = new Movie({title: title, description: description});
    console.log("title: " + movie.title + "description: " + movie.description);
    movie
        .save()
        .then(result => {
            console.log('Product added');
            res.redirect('/template');
       })
       .catch(err => {
           console.log(err);
       })
}