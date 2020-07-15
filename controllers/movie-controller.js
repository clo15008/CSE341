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

exports.getMovies = (req, res, next) => {
    // console.log('here');
    Movie.find()
    .then(movies => {
        // console.log(movies);
        // if(!req.session.isLoggedIn){
        //     res.redirect('/template');
        // }
        res.render('movies.ejs', {
            data: movies,
            title: 'Movies',
            path: 'views/movies'
        });
    })
    .catch(err => {
        console.log(err);
    });
}

exports.movieDetail = (req, res, next) => {
    const movieTitle = req.params.movieId;
    // Movie.findById
}