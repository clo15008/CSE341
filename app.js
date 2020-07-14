const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// const session = require('express-session');
const app = express();
const server = http.createServer(app);

const mainRoutes = require('./routes/main');

// app.use(session({secret: 'secret', resave: false, saveUninitialized: false}));

app.use(express.static(path.join(__dirname, 'public')))
   .set('views', path.join(__dirname, 'views'))
   .set('view engine', 'ejs')
   .use(bodyParser({extended: false}))
   .use('/', mainRoutes)
//    .get('/', (req, res, next) => {
//       res.render('template', {title: 'Welcome to my CSE341 repo', path: '/'});
//     })
    .use((req, res, next) => {
        // 404 page
        res.render('404', {title: '404 - Page Not Found', path: req.url})
    })

// server.listen(5000);

// MongoDB
const corsOptions = {
    origin: "https://CSEProject.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));


// const options = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     family: 4
// };

// const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://user1:Fiji2014@cse341cluster-3dwlw.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect('mongodb+srv://user1:Fiji2014@cluster0-7dvhb.mongodb.net/test?retryWrites=true&w=majority')
.then(result => {
  console.log(`Listening on ${ 5000 }`); // This should be your user handling code implement following the course videos
  app.listen(5000);
})
.catch(err => {
  console.log(err);
});